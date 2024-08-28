import styled from "styled-components";
import { WHITE } from "../../share/style";

export const ContainerHeader = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;

  .container-header__logo {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }

  .container-header__search {
    width: 100%;
  }

  .container-header__subtitle {
    color: ${WHITE};
    text-align: center;
  }
`;
