import type { JSX } from "react";
import { Button } from "@mui/material";

type ButtonFooterProps = {
  Icon: JSX.Element;
};

export const ButtonFooter = ({ Icon }: ButtonFooterProps): JSX.Element => {
  return (
    <Button
      sx={{
        width: 50,
        height: 50,
        minWidth: 50,
        backgroundColor: "rgb(51, 51, 51)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgb(204, 204, 204)",
        padding: 0,
        "&:hover": {
          backgroundColor: "rgb(65, 65, 65)",
        },
      }}
    >
      {Icon}
    </Button>
  );
};
