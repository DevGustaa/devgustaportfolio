import type { JSX } from "react";
import backgroundImage from "../../assets/EyeSimbol.png";
import "./style.css";
import { ButtonFooter } from "../buttonfooter/buttonFooter";
import { Github, Linkedin, Mail } from "lucide-react";
import { MyButton } from "../myButton/myButton";

export const Footer = (): JSX.Element => {
  return (
    <div className="body-footer">
      <div className="body-footer-top">
        <div className="body-title-footer">
          <img alt="Eye icon" src={backgroundImage} style={{ width: "90px" }} />
          <div className="body-text-footer">
            <p className="title-footer">Porftólio Profissional</p>
            <p className="subtitle-footer">
              ©2025 todos os direitos reservados
            </p>
          </div>
        </div>
        <div className="body-footer-button-link">
          <ButtonFooter Icon={<Github />} />
          <ButtonFooter Icon={<Linkedin />} />
          <ButtonFooter Icon={<Mail />} />
        </div>
      </div>
      <div className="body-footer-line" />
      <div className="body-footer-button-nav">
        <MyButton title="Sobre" />
        <MyButton title="Habilidade" />
        <MyButton title="Projetos" />
        <MyButton title="Contato" />
      </div>
    </div>
  );
};
