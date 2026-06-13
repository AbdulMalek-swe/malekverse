import {
  SiNextdotjs,
  SiNestjs,
  SiFastapi,
  SiTurborepo,
  SiStripe,
  SiSnowflake,
  SiLeaflet,
  SiDocker,
  SiGraphql,
  SiAmazon,
  SiGooglecloud
} from "react-icons/si";
import { FaReact, FaGithub, FaDatabase, FaNodeJs } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

export const techStack: any = [
  {
    id: 1,
    name: "Core Architecture",
    description: "Frontend frameworks and core application foundations",
    children: [
      { id: 1, name: "Next.js", icon: <SiNextdotjs className="text-4xl" />, type: "framework" },
      { id: 2, name: "React", icon: <FaReact className="text-4xl" />, type: "library" },
      { id: 3, name: "NestJS", icon: <SiNestjs className="text-4xl" />, type: "framework" },
      { id: 4, name: "FastAPI", icon: <SiFastapi className="text-4xl" />, type: "framework" },
      { id: 5, name: "Node.js", icon: <FaNodeJs className="text-4xl" />, type: "runtime" },
    ],
  },
  {
    id: 2,
    name: "Data & APIs",
    description: "Data processing, third-party integrations, and visualization",
    children: [
      { id: 1, name: "Snowflake", icon: <SiSnowflake className="text-4xl" />, type: "database" },
      { id: 2, name: "Stripe API", icon: <SiStripe className="text-4xl" />, type: "api" },
      { id: 3, name: "GraphQL", icon: <SiGraphql className="text-4xl" />, type: "api" },
      { id: 4, name: "Meta Graph API", icon: <FaDatabase className="text-4xl" />, type: "api" },
      { id: 5, name: "Leaflet", icon: <SiLeaflet className="text-4xl" />, type: "visualization" },
    ],
  },
  {
    id: 3,
    name: "Infrastructure & DevOps",
    description: "Monorepos, containerization, and cloud deployment",
    children: [
      { id: 1, name: "Turborepo", icon: <SiTurborepo className="text-4xl" />, type: "tool" },
      { id: 2, name: "Docker", icon: <SiDocker className="text-4xl" />, type: "container" },
      { id: 3, name: "AWS", icon: <SiAmazon className="text-4xl" />, type: "cloud" },
      { id: 4, name: "GCP", icon: <SiGooglecloud className="text-4xl" />, type: "cloud" },
      { id: 5, name: "Git", icon: <BiGitRepoForked className="text-4xl" />, type: "vcs" },
    ],
  },
];
