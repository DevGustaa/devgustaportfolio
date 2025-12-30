import type { JSX } from "react";
import "./style.css";
import { Button } from "@mui/material";

type SobreButtonProps = {
  text: string;
};

export const SobreButton = ({ text }: SobreButtonProps): JSX.Element => {
  return (
    <Button id="sobreButton">
      <p id="textButton">{text}</p>
    </Button>
  );
};
