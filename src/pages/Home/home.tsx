import type { JSX } from "@emotion/react/jsx-runtime";
import CodeIcon from "@mui/icons-material/Code";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Terminal } from "lucide-react";
import { Database } from "lucide-react";
import { Mouse } from "lucide-react";
import backgroundImage from "../../assets/EyeSimbol.png";
import "./style.css";
import { SobreButton } from "../../components/buttonSobre/buttonSobre";

export const Home = (): JSX.Element => {
  return (
    <div id="bodyMain">
      <div style={{ position: "absolute", opacity: 0.1 }}>
        <img
          src={backgroundImage}
          alt="Background"
          className="backgroundSimbol"
        />
      </div>
      <div id="bodyTop">
        <div>
          <div id="iconStack">
            <CodeIcon id="topIcon" />
            <ShieldOutlinedIcon id="topIcon" />
            <Terminal id="topIcon" />
            <Database id="topIcon" />
            <DnsOutlinedIcon id="topIcon" />
            <LanguageOutlinedIcon id="topIcon" />
          </div>
          <div id="bodyTitle">
            <h1>Desenvolvedor Full Stack</h1>
            <p id="textDescription">
              Especialista em Frontend, Backend e Segurança da informação
            </p>
          </div>
        </div>
        <div id="sobreButtons">
          <SobreButton text="Ver Projetos" />
          <SobreButton text="Contato" />
        </div>
      </div>
      <Mouse id="mouseIcon" />
    </div>
  );
};
