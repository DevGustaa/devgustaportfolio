import { Button } from "@mui/material";
import { type JSX } from "react";

type MyButtonProps = {
  title: string;
  nav?: string;
  ishome?: boolean;
  chrildren?: JSX.Element;
};

export const MyButton = ({
  title,
  nav,
  ishome,
  chrildren,
}: MyButtonProps): JSX.Element => {
  const handleClick = () => {
    if (ishome == true) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      if (!nav) return;
      window.location.href = nav;
    }
  };

  return (
    <Button
      onClick={handleClick}
      style={{ color: "white", textTransform: "none" }}
    >
      {chrildren ? chrildren : title}
    </Button>
  );
};
