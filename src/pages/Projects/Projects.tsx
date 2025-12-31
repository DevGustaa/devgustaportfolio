import type { JSX } from "@emotion/react/jsx-runtime";
import "./style.css";
import { useInView } from "../../hooks/useInView";
import CodeIcon from "@mui/icons-material/Code";
import { ProjectBox } from "./component/projectbox/projectBox";
import { skills } from "../../data/projects";

export const Project = (): JSX.Element => {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div className="body-project">
      <div>
        <p className={`titleMain ${isVisible ? "animate" : ""}`} ref={ref}>
          Projetos
        </p>
        <div className={`project-subtitle ${isVisible ? "animate" : ""}`}>
          <CodeIcon />
          <p>Desenvolvimento</p>
        </div>
      </div>
      <div className={`body-projects ${isVisible ? "animate" : ""}`} ref={ref}>
        {skills.data.map((v) => (
          <ProjectBox
            title={v.title}
            descr={v.desc}
            git={v.git}
            web={v.web}
            skill={v.skills}
            key={v.title}
          />
        ))}
      </div>
    </div>
  );
};
