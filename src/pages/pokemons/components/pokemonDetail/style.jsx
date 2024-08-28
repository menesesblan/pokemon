import styled from "styled-components";
import {
  minWidthQueries,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  WHITE,
} from "../../../../share/style";

export const DialogItem = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  text-align: center;
  color: ${WHITE};
  background-color: ${({ color }) =>
    color == "primary" ? PRIMARY_COLOR : TERTIARY_COLOR};
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
`;

export const DialogImg = styled.img`
  width: 200px;

  @media (${minWidthQueries.desktop.query}) {
    width: 250px;
  }
`;

export const ContainerDialog = styled.div`
  width: 300px;
  .css-bdhsul-MuiTypography-root-MuiDialogTitle-root {
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
  .MuiDialogTitle-root + .css-ypiqx9-MuiDialogContent-root {
    text-align: center;
  }

  @media (${minWidthQueries.desktop.query}) {
    width: 450px;
    .css-bdhsul-MuiTypography-root-MuiDialogTitle-root {
      font-size: 3rem;
    }
  }
`;

export const Chip = styled.div`
  border: 1px solid ${WHITE};
  width: auto;
  border-radius: 20px;
  padding: 5px;
  margin: 5px 0;
  line-height: 1;
`;
