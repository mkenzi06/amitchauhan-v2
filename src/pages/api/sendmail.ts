import { NextApiRequest, NextApiResponse } from "next";
import { ValidationError } from "yup";
import { mailValidationSchema } from "@/components/contact-form/contact-form";
import { rateLimiterApi, getUserId } from "@/utility/rate-limiter";
import { sendMail } from "@/utility/sendMail";

const REQUEST_PER_HOUR = 5;
const RATELIMIT_DURATION = 3600000;
const MAX_USER_PER_SECOND = 100;

const limiter = rateLimiterApi({
  interval: RATELIMIT_DURATION,
  uniqueTokenPerInterval: MAX_USER_PER_SECOND,
  getUserId,
});

export type MailRequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string | string[] }>,
) => {
  try {
    const { method } = req;
    if (method !== "POST") {
      res.status(405).json({
        status: 405,
        message: `[${method}] is not allowed`,
      });
      return;
    }

    const body: MailRequestBody = req.body;

    const isRateLimited = await limiter.check(res, req, REQUEST_PER_HOUR);
    if (isRateLimited.status !== 200) {
      res.status(429).json({
        status: 429,
        message: "Rate limit exceeded",
      });
      return;
    }

    try {
      await mailValidationSchema.validate(body, { abortEarly: false });
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        res.status(422).json({
          status: 422,
          message: validationError.errors,
        });
        return;
      } else {
        throw validationError;
      }
    }

    const { name, email, subject, message } = body;
    const response = await sendMail(name, email, subject, message);

    res.status(response.status).json({ status: response.status, message: response.message });
  } catch (error: any) {
    console.error("Caught error:", error);
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || "Internal server error",
    });
  }
};

export default handler;
