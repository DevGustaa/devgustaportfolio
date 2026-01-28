import { SkillsBox } from "../../components/skillsBox/skilsBox";
import { TechBox } from "../../components/techBox/techBox";
import IconG from "../../assets/IconG.png";
import "./style.css";
import { useInView } from "../../hooks/useInView";
import meImage from "../../assets/me.jpg";

export const SobreMim = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section id="body-sobre">
      <p
        id="body-sobre-title"
        className={`titleMain ${isVisible ? "animate" : ""}`}
      >
        Sobre Mim
      </p>
      <div id="main">
        <div>
          <div
            ref={ref}
            className={`backgroundImage ${isVisible ? "animate" : ""}`}
          >
            <div className="backgroundMiddle">
              <img
                src={meImage}
                alt="foto do desenvolvedor"
                id="meImage"
                className="backgroundMiddle"
              />
            </div>
            <div className="backgroundBottom">
              <img
                src={IconG}
                alt="Icon G"
                id="iconG"
                style={{ width: "60px" }}
              />
              <p id="techName">Dev</p>
            </div>
          </div>
        </div>
        <div className={`bodyText ${isVisible ? "animate" : ""}`} ref={ref}>
          <TechBox />
          <p id="title">Desenvolvedor Full Stack</p>
          <p id="text">
            Experiência sólida em desenvolvimento web full stack, criando
            aplicações modernas e escaláveis. Especialista em React, Node.js e
            TypeScript. Foco em performance, acessibilidade e experiência do
            usuário. Construindo com experiências de soluções web de ponta a
            ponta, domino desde a criação de interfaces intuitivas e responsivas
            até APIs robustas e otimização de banco de dados. Apaixonado por
            clean code, arquitetura de software e boas práticas de
            desenvolvimento.
          </p>
          <div id="skillsBox">
            <SkillsBox title="React & Next.js" />
            <SkillsBox title="Node.js & Express" />
            <SkillsBox title="TypeScript" />
            <SkillsBox title="Java" />
          </div>
        </div>
      </div>
    </section>
  );
};
