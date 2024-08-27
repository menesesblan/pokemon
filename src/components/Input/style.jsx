import styled from "styled-components";
import { BLACK, GREY_LIGHT, minWidthQueries, WHITE } from "../../share/style";

export const ContainerInput = styled.div`
  .container-input__input {
    height: 30px;
    width: 98%;
    border-radius: 5px;
    border: 2px solid ${GREY_LIGHT};
    background-color: transparent;
  }

  @media (${minWidthQueries.desktop.query}) {
    .container-input__input {
      border: 2px solid ${GREY_LIGHT};
      color: ${BLACK};
    }
  }
`;
