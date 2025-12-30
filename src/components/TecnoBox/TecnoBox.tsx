import type { ElementType, JSX } from "react";
import "./style.css";
import React from "react";

type tecnoArray = {
  name: string;
};

type TecnoBoxProps = {
  Icon: ElementType;
  title: string;
  tecnology?: tecnoArray[];
  color: "roxo" | "rosa" | "azul";
};

export const TecnoBox = ({
  color,
  title,
  tecnology,
  Icon,
}: TecnoBoxProps): JSX.Element => {
  const startColor =
    color == "azul" ? "#670eb0ff" : color == "roxo" ? "#7a25c0" : "#7a25c0";
  const endColor =
    color == "azul" ? "#350595ff" : color == "roxo" ? "#3f1164ff" : "#ff1ad1";

  return (
    <div className="tecno-box">
      <div className="top-tecno">
        <div
          className="icon-box-tecno"
          style={
            {
              "--color-start": startColor,
              "--color-end": endColor,
            } as React.CSSProperties
          }
        >
          <Icon />
        </div>
        <p className="text-tecno">{title}</p>
      </div>
      <div className="bottom-tecno">
        {tecnology?.map((v) => (
          <div className="object-bottom" key={v.name}>
            <div className="purple-circle" />
            <p>{v.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
