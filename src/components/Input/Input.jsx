import React from "react";
import { ContainerInput } from "./style.jsx";

const Input = ({ type, onChange, name, value, placeholder, icon }) => {
  return (
    <ContainerInput icon={icon}>
      <div>
        <input
          className="container-input__input"
          type={type}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </ContainerInput>
  );
};

export default Input;
