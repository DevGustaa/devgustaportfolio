import CodeIcon from "@mui/icons-material/Code";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import { Database } from "lucide-react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import type { ElementType } from "react";

export type SkillColor = "roxo" | "azul" | "rosa";

export type SkillItem = {
  name: string;
};

export type SkillCategory = {
  title: string;
  icon: ElementType;
  color: SkillColor;
  tecnology: SkillItem[];
};

export const skills = {
  data: [
    {
      title: "Frontend",
      icon: CodeIcon,
      color: "azul",
      tecnology: [
        { name: "React" },
        { name: "Next.js" },
        { name: "HTML" },
        { name: "CSS" },
      ],
    },
    {
      title: "Backend",
      icon: DnsOutlinedIcon,
      color: "roxo",
      tecnology: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "Nest.js" },
      ],
    },
    {
      title: "Banco de Dados",
      icon: Database,
      color: "rosa",
      tecnology: [{ name: "PostgreSQL" }, { name: "MySQL" }],
    },
    {
      title: "DevOps",
      icon: Database,
      color: "roxo",
      tecnology: [{ name: "Docker" }, { name: "AWS" }],
    },
    {
      title: "Web",
      icon: LanguageOutlinedIcon,
      color: "rosa",
      tecnology: [{ name: "RESTFULL API" }, { name: "JWT" }],
    },
  ],
};
