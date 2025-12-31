import { TextField } from "@mui/material";
import type { JSX } from "react";

type InputForm = {
  label: string;
  multilinetrue?: boolean;
};

export const InputForm = ({ label, multilinetrue }: InputForm): JSX.Element => {
  return (
    <TextField
      label={label}
      variant="filled"
      multiline={multilinetrue ? true : false}
      rows={multilinetrue ? 4 : 0}
      sx={{
        backgroundColor: "rgba(53, 53, 53, 1)",
        borderRadius: "10px",
        border: "1px solid rgba(86, 86, 86, 1)",
        width: "80%",
        "& .MuiInputBase-input": {
          color: "white",
        },
        "& .MuiInputBase-input.Mui-focused": {
          border: "1px solid #bb88e5",
        },
        "& .MuiInputLabel-root": {
          color: "#bdbdbd",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#bb88e5",
        },
        "& .MuiFilledInput-root.Mui-focused": {
          border: "1px solid #bb88e5",
        },
      }}
    />
  );
};
