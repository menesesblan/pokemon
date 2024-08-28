import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { TERTIARY_COLOR } from "../../share/style";
import { ContainerLoading } from "./style";

const Loading = () => {
  return (
    <ContainerLoading>
      <Box
        sx={{
          display: "ruby-text ",
          margin: "0 auto",
          color: TERTIARY_COLOR,
        }}
      >
        <CircularProgress sx={{ color: TERTIARY_COLOR }} />
        <h3>Cargando..</h3>
      </Box>
    </ContainerLoading>
  );
};
export default Loading;
