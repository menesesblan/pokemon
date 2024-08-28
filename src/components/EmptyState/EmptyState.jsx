import React from "react";
import PokemonImg from "../../assets/images/pokemon_corious.png";
import { Container } from "./style";

const EmptyState = ({ text }) => {
  return (
    <Container>
      <img className="container__img" src={PokemonImg} alt="" />
      <h1>{text}</h1>
    </Container>
  );
};

export default EmptyState;
