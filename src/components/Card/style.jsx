import styled from "styled-components";
import {
  BLACK,
  GREY_LIGHT,
  PRIMARY_COLOR,
  WHITE,
  minWidthQueries,
} from "../../share/style";

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
        font-size: 28px;
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

      .container-card__buttonAction {
        display: flex;
        justify-content: end;
        align-items: end;
        margin-right: 20px;
        padding: 5px 0;

        button {
          width: 25px;
          background-color: ${PRIMARY_COLOR};
          height: 25px;
          border: none;
          border-radius: 100%;

          img {
            width: 15px;
          }
        }
      }
    }
  }
`;
