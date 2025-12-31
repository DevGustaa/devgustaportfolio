import type { JSX } from "react";
import { Button } from "@mui/material";

type ButtonFooterProps = {
  Icon: JSX.Element;
  link: string;
  type: "primary" | "secondary";
};

export const ButtonFooter = ({
  Icon,
  link,
  type,
}: ButtonFooterProps): JSX.Element => {
  return (
    <Button
      href={link}
      target="_blank"
      className="button-footer"
      sx={{
        width: 50,
        height: 50,
        minWidth: 50,
        backgroundColor: type == "primary" ? "rgb(51, 51, 51)" : "#470566ff",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: type == "primary" ? "rgb(204, 204, 204)" : "#dbb7ecff",
        padding: 0,
        "&:hover": {
          backgroundColor: type == "primary" ? "rgb(65, 65, 65)" : "#611784ff",
        },
      }}
    >
      {Icon}
    </Button>
  );
};
