import styled from "styled-components";
import { SECONDARY_COLOR, TERTIARY_COLOR, WHITE } from "../../share/style";

export const ContainerPagination = styled.div`
  margin: 0 auto;
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover {
    background-color: ${TERTIARY_COLOR};
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background: ${TERTIARY_COLOR};
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
    color: ${WHITE};
    border: 1px solid ${SECONDARY_COLOR};
  }
`;
