import styled from "styled-components";
import { minWidthQueries } from "../../share/style";

export const ContainerButton = styled.div`
  .button {
    border: none;
    height: 2.1rem;
    width: 100%;
    border-radius: 5px;
    background: ${({ color }) => color};
    font-size: 16px;
    color: ${({ colorfont }) => colorfont};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: "Mandali", sans-serif;
  }

  img {
    width: 23px;
  }
  /* @media (${minWidthQueries.desktop.query}) {
    .button {
      height: 40px;
      width: 250px;
    }
  } */
`;
