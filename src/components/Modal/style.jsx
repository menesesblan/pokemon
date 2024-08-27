import {
  GREY_DARK,
  GREY_LIGHT,
  PRIMARY_COLOR,
  WHITE,
  minWidthQueries,
} from "../../share/style";
import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .container-modal__modal {
    background-color: ${WHITE};
    height: 400px;
    margin: 20px;
    padding: 0 5px;
    border: 1px solid ${GREY_LIGHT};
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px ${GREY_DARK};
    text-align: center;
    display: grid;
    grid-template-rows: 80% 20%;
    z-index: 1001;

    .container-modal__title {
      color: ${PRIMARY_COLOR};
    }

    .container-modal__container_icon {
      display: grid;
      justify-content: center;
      .container-modal__icon {
        width: 90px;
      }
    }

    .container-modal__text {
      font-weight: 600;
    }

    .container-modal__information {
      font-weight: bolder;
      color: ${PRIMARY_COLOR};
    }

    p {
      margin: 0;
    }

    .container-modal__buttons {
      display: grid;
      grid-template-columns: 45% 45%;
      gap: 10px;
      justify-content: center;
    }
  }

  @media (${minWidthQueries.tabletBigger.query}) {
    justify-content: center;
    .container-modal__modal {
      width: 600px;

      .container-modal__title {
        font-size: 30px;
      }

      .container-modal__text {
        font-size: 20px;
      }

      .container-modal__information {
        font-size: 20px;
      }
    }
  }
`;
