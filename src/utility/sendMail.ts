import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = "kenzimebarki2@gmail.com";
  const pass = "logg crwv oifq nyaw";

  if (!user || !pass) {
    return { status: 500, message: "Internal server error" };
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: email === "SELF" ? user : email,
    to: user,
    subject: `Portfolio: [${subject}]`,
    text: `${name}: <${email}>\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: 200, message: "Mail sent successfully" };
  } catch (error) {
    console.error("Failed to send mail:", error);
    return { status: 500, message: "Failed to send mail" };
  }
};
