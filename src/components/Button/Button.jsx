import React from "react";
import { ContainerButton } from "./style.jsx";

const Button = ({ onclick, description, colorButton, colorFont, type }) => {
  return (
    <ContainerButton color={colorButton} colorfont={colorFont}>
      <button className="button" onClick={onclick} type={type}>
        {description}
      </button>
    </ContainerButton>
  );
};

export default Button;
