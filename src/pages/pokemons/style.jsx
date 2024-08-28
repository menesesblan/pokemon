import styled from "styled-components";
import {
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  WHITE,
  minWidthQueries,
} from "../../share/style";

export const ContainerPokemon = styled.div`
  display: grid;
  grid-template-rows: auto auto 50px;
  /* justify-content: center; */
  background-color: ${PRIMARY_COLOR};
  height: 100%;
  padding: 0 10px;
  gap: 24px;

  .container-pokemon__header {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;

    .container-pokemon__logo {
      width: 100%;
      max-width: 400px;
      margin-bottom: 20px;
    }
    .container-pokemon__subtitle {
      color: ${WHITE};
      text-align: center;
    }

    .container-pokemon__search {
      width: 100%;
    }
  }

  .container-pokemon__body {
    .container-pokemon__cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      justify-content: center;
      width: 100%;
    }
  }

  .container-pokemon__pagination {
    display: flex;
    position: fixed;
    align-items: center;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100vw;
    background-color: ${PRIMARY_COLOR};
  }
  @media (${minWidthQueries.tablet.query}) {
    .container-pokemon__body {
      .container-pokemon__cards {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (${minWidthQueries.desktop.query}) {
    padding: 0 200px;
    .container-pokemon__body {
      .container-pokemon__subtitle {
        font-size: 35px;
      }
      .container-pokemon__cards {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
`;
