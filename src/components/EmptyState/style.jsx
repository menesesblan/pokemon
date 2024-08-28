import styled from "styled-components";
import { WHITE } from "../../share/style";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  color: ${WHITE};
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  padding: 0 5px;
  margin: 20px auto;
  text-align: center;
  line-height: 1;

  .container__img {
    width: 100%;
    max-width: 230px;
    max-height: 230px;
    margin: 0 auto;
  }
`;
