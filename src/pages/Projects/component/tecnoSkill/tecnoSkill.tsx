import type { JSX } from "react";
import "./style.css";

type TecnoSkillProps = {
  skill: string;
};

export const TecnoSkill = ({ skill }: TecnoSkillProps): JSX.Element => {
  return (
    <div className="body-tecno-skill">
      <p className="body-tecno-font">{skill}</p>
    </div>
  );
};
