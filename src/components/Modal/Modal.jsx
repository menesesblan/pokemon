import React from "react";
import { ContainerModal } from "./style";
import Button from "../Button/Button";
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from "../../share/style";

const Modal = ({
  title,
  icon,
  text,
  information,
  goBack,
  onclick,
  nameButton,
}) => {
  return (
    <ContainerModal>
      <div className="container-modal__modal">
        <div>
          <h2 className="container-modal__title">{title}</h2>
          <div className="container-modal__container_icon">
            <img src={icon} alt="icon" className="container-modal__icon" />
          </div>
          <p className="container-modal__text">{text}</p>
          <p className="container-modal__information">{information}</p>
        </div>

        <div className="container-modal__buttons">
          <div>
            <Button
              type={"button"}
              // onclick={() => goBack()}
              description={"Cerrar"}
              colorButton={SECONDARY_COLOR}
              colorFont={WHITE}
            />
          </div>
        </div>
      </div>
    </ContainerModal>
  );
};

export default Modal;
