import type { JSX } from "react";
import "./style.css";
import { Button } from "@mui/material";

type SobreButtonProps = {
  text: string;
  nav?: string;
};

export const SobreButton = ({ text, nav }: SobreButtonProps): JSX.Element => {
  const handleClick = () => {
    if (!nav) return;
    window.location.href = nav;
  };
  return (
    <Button id="sobreButton" onClick={handleClick}>
      <p id="textButton">{text}</p>
    </Button>
  );
};
