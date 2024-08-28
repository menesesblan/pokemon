import styled from "styled-components";
import {
  minWidthQueries,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  WHITE,
} from "../../../../share/style";

export const ContainerDialog = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  .pokemon-detail__title {
    padding: 0;
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: center;
    letter-spacing: 0;
    font-family: "Mandali", sans-serif;
    color: ${SECONDARY_COLOR};
    text-transform: capitalize;
  }

  .container-dialog__img {
    width: 200px;

    @media (${minWidthQueries.desktop.query}) {
      width: 250px;
    }
  }

  .container-dialog__container-item {
    width: 100%;
    height: auto;
    border-radius: 5px;
    text-align: center;
    color: ${WHITE};
    margin-bottom: 5px;
    text-transform: capitalize;

    .dialogItem__item {
      display: flex;
      justify-content: center;
      gap: 5px;
    }

    h2,
    p {
      margin: 0;
    }
  }

  .container-dialog__container-item--primary {
    background-color: ${PRIMARY_COLOR};
  }

  .container-dialog__container-item--tertiary {
    background-color: ${TERTIARY_COLOR};
  }

  .container-dialog__chip {
    border: 1px solid ${WHITE};
    width: auto;
    border-radius: 20px;
    padding: 5px;
    margin: 5px 0;
    line-height: 1;
  }
`;
