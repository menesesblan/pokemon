import styled from "styled-components";
import {
  BLACK,
  GREY_LIGHT,
  minWidthQueries,
  SECONDARY_COLOR,
  WHITE,
} from "../../share/style";

export const ContainerInput = styled.div`
  .container-input__input {
    height: 30px;
    width: 98%;
    border-radius: 10px;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);

    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: calc(100% - 10px) center;
  }
  input::placeholder {
    color: ${SECONDARY_COLOR};
    opacity: 1;
    padding-left: 10px;
  }

  @media (${minWidthQueries.desktop.query}) {
    .container-input__input {
      height: 35px;
    }

    input::placeholder {
      font-size: 18px;
    }
  }
`;
