import React from "react";
import PokemonImg from "../../assets/images/pokemon_corious.png";
import { ContainerEmptyState } from "./style";

const EmptyState = ({ text, color }) => {
  return (
    <ContainerEmptyState color={color}>
      <img className="container-empty-state__img" src={PokemonImg} alt="" />
      <h1 className="container-empty-state__h1--color">{text}</h1>
    </ContainerEmptyState>
  );
};

export default EmptyState;
