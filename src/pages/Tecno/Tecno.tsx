import { TecnoBox } from "../../components/TecnoBox/TecnoBox";
import "./style.css";
import { skills } from "../../data/skills";
import type { JSX } from "react";
import { useInView } from "../../hooks/useInView";

export const Tecno = (): JSX.Element => {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div className="bodyMainTec" id="bodyMainTec">
      <p className={`text-tec ${isVisible ? "animate" : ""}`} ref={ref}>
        Tecnologias & Habilidades
      </p>
      <div className={`bodyTec ${isVisible ? "animate" : ""}`} ref={ref}>
        {skills.data.map((v: any) => (
          <TecnoBox
            key={v.title}
            color={v.color}
            title={v.title}
            tecnology={v.tecnology}
            Icon={v.icon}
          />
        ))}
      </div>
    </div>
  );
};
