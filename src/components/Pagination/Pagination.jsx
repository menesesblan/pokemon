import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationController = ({ count, setOffset }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setOffset((value - 1) * 20);
  };

  let countPokemonts = Math.ceil(count / 20);
  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={countPokemonts} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default PaginationController;
