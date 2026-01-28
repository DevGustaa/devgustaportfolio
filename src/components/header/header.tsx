import { useState, type JSX } from "react";
import EyeSimbol from "../../assets/EyeSimbol.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MyButton } from "../myButton/myButton";
import "./style.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Button } from "@mui/material";

export const Header = (): JSX.Element => {
  const width = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div id="bodyHeader">
        <div id="leftHeader">
          <MyButton
            title="Home"
            ishome
            chrildren={<img src={EyeSimbol} width={100} />}
          />
          <p>{`< Gustavo Albuquerque />`}</p>
        </div>
        {width > 850 ? (
          <div id="rightHeader">
            <MyButton title="Sobre" nav="#body-sobre" />
            <MyButton title="Habilidade" nav="#bodyMainTec" />
            <MyButton title="Projetos" nav="#body-project" />
            <MyButton title="Contato" nav="#body-contact" />
          </div>
        ) : (
          <Button onClick={() => setOpen(!open)}>
            {!open ? <MenuIcon id="btnMenu" /> : <CloseIcon id="btnMenu" />}
          </Button>
        )}
      </div>
      {open && width <= 850 && (
        <div id="bottomHeader">
          <MyButton title="Sobre" />
          <MyButton title="Habilidade" />
          <MyButton title="Projetos" />
          <MyButton title="Contato" />
        </div>
      )}
    </div>
  );
};
