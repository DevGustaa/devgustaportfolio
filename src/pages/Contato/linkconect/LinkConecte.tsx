import { ButtonFooter } from "../../../components/buttonfooter/buttonFooter";
import type { JSX } from "@emotion/react/jsx-runtime";
import "./style.css";

type LinkConect = {
  title: string;
  acount: string;
  link: string;
  icon: JSX.Element;
};

export const LinkConect = ({ title, acount, link, icon }: LinkConect) => {
  return (
    <a className="body-contact-right-option" href={link} target="_blank">
      <ButtonFooter type="secondary" link={link} Icon={icon} />
      <div className="body-contact-right-text">
        <p className="body-contact-right-option-title">{title}</p>
        <p className="body-contact-right-option-subtitle">{acount}</p>
      </div>
    </a>
  );
};
