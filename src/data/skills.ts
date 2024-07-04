import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import dartSvg from "@/public/icons/dartlang-icon.svg"
import cppSvg from "@/public/icons/c.svg"
import java from "@/public/icons/java-icon.svg"
import phpsvg from "@/public/icons/php-icon.svg"
// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";
import hibernatesvg from "@/public/icons/hibernate-ar21.svg"
import VuejsSvg from "@/public/icons/vuejs-icon.svg";
import NuxtjsSvg from "@/public/icons/nuxtjs-ar21.svg";
import PytorchSvg from "@/public/icons/pytorch-icon.svg";
import BootstrapSvg from "@/public/icons/getbootstrap-ar21.svg";
import FlutterSvg from "@/public/icons/flutterio-ar21.svg";
import djangoSvg from "@/public/icons/djangoproject-ar21.svg"
import laravelSvg from "@/public/icons/laravel-ar21.svg"
import symfonySvg from "@/public/icons/symfony-icon.svg"

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import mysqlsvg from "@/public/icons/mysql-ar21.svg"
import sqlite from "@/public/icons/sqlite-icon.svg"

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Java",
        icon: java,
      },
  
      {
        name: "Dart",
        icon: dartSvg,
      },
   
      {
        name: "C++",
        icon: cppSvg,
      },
      {
        name: "PHP",
        icon: phpsvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Vuejs",
        icon: VuejsSvg,
      },
      {
        name: "Nuxtjs",
        icon: NuxtjsSvg,
      },
      {
        name: "Hibernate",
        icon: hibernatesvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Pytorch",
        icon: PytorchSvg,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
      {
        name: "Laravel",
        icon:  laravelSvg,
      },
      {
        name: "Symfony",
        icon: symfonySvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Mysql",
        icon: mysqlsvg,
      },
      {
        name: "Sqlite",
        icon: sqlite,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
