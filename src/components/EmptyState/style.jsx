import styled from "styled-components";

export const ContainerEmptyState = styled.div`
  display: grid;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  padding: 0 5px;
  margin: 20px auto;
  text-align: center;
  line-height: 1;

  .container-empty-state__img {
    max-width: 300px;
    max-height: 230px;
    margin: 0 auto;
  }
  .container-empty-state__h1--color {
    color: ${({ color }) => color};
  }
`;
