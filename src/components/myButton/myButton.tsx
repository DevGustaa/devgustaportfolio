import { Button } from "@mui/material";
import type { JSX } from "react";

type MyButtonProps = {
  title: string;
};

export const MyButton = ({ title }: MyButtonProps): JSX.Element => {
  return (
    <Button style={{ color: "white", textTransform: "none" }}>{title}</Button>
  );
};
