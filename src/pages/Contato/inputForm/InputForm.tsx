import { TextField } from "@mui/material";
import type { JSX } from "react";

type InputForm = {
  label: string;
  multilinetrue?: boolean;
  id?: "email" | "message" | "name";
  name?: "email" | "message" | "name";
  type?: "email" | "text";
};

export const InputForm = ({
  label,
  multilinetrue,
  type,
  id,
  name,
}: InputForm): JSX.Element => {
  return (
    <TextField
      label={label}
      variant="filled"
      required
      name={name}
      type={type}
      id={id}
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
