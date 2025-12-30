import "./style.css";

type SkillsBoxProps = {
  title?: string;
};

export const SkillsBox = ({ title }: SkillsBoxProps) => {
  return (
    <div id="skillBox">
      <p className="texto">{title}</p>
    </div>
  );
};
