import React from "react";
import { ContainerCard } from "./style.jsx";

const Card = ({ id, img, title, onclick }) => {
  return (
    <ContainerCard onClick={onclick} data-testid="container-card">
      <div className="container-card__dataCard" id={id}>
        <div className="container-card__logo">
          <img className="container-card__imgLogo" src={img} alt="card-img" />
        </div>
        <div className="container-card__text">
          <div className="container-card__title">{title}</div>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Card;
