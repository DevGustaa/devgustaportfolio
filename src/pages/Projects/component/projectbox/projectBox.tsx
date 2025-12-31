import type { JSX } from "@emotion/react/jsx-runtime";
import Casamento from "../../../../assets/Projetos/LaisePereira.jpg";
import "./style.css";
import { TecnoSkill } from "../tecnoSkill/tecnoSkill";
import { GitHub } from "@mui/icons-material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Tooltip } from "@mui/material";

type Skill = {
  skill: string;
}[];

type ProjectBox = {
  title: string;
  descr: string;
  skill?: Skill;
  web?: string | "";
  git?: string | "";
};

export const ProjectBox = ({
  title,
  descr,
  web,
  git,
  skill,
}: ProjectBox): JSX.Element => {
  return (
    <div className="body-project-box">
      <div className="body-project-image-box">
        <img src={Casamento} className="body-project-image" />
      </div>
      <div className="body-project-datas">
        <p className="body-project-title">{title}</p>
        <p className="body-project-subtitle">{descr}</p>
        <div className="body-project-skills">
          {skill?.map((v) => (
            <TecnoSkill skill={v.skill} key={v.skill} />
          ))}
        </div>
        <div className="body-project-links">
          {git != "" && (
            <Tooltip
              title="Código"
              children={
                <a href={git} target="_blank">
                  <GitHub
                    fontSize="large"
                    sx={{
                      color: "white",
                      "&:hover": { color: "#ab94c1ff" },
                    }}
                  />
                </a>
              }
            />
          )}
          {web != "" && (
            <a href={web} target="_blank">
              <Tooltip
                children={
                  <LanguageOutlinedIcon
                    fontSize="large"
                    className="icon-web"
                    sx={{
                      color: "white",
                      "&:hover": { color: "#ab94c1ff" },
                    }}
                  />
                }
                title={"WebSite"}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
