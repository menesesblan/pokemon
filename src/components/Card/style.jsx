import styled from "styled-components";
import { BLACK, GREY_LIGHT, WHITE } from "../../share/style";

export const ContainerCard = styled.div`
  border: 1px solid ${GREY_LIGHT};
  border-radius: 10px;
  box-shadow: none;
  background-color: ${WHITE};

  .container-card__dataCard {
    display: grid;
    grid-template-columns: 40% 60%;
    min-height: 100px;
    gap: 10px;
    cursor: pointer;
    margin-right: 10px;

    .container-card__logo {
      display: flex;
      justify-content: end;
      align-items: center;

      .container-card__imgLogo {
        width: 70px;
      }
    }

    .container-card__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: start;

      .container-card__title {
        font-size: 25px;
        font-weight: bolder;
        color: ${BLACK};
        text-transform: capitalize;
        line-height: 1;
      }

      .container-card__info {
        font-size: 17px;
        font-weight: 500;
        line-height: 1.1;
      }
    }
  }
`;
