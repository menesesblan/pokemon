import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ContainerPagination } from "./style";

const PaginationController = ({ count, setOffset }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    setOffset((value - 1) * 20);
  };

  const countPokemons = Math.ceil(count / 20);

  return (
    <ContainerPagination>
      {count != 0 && (
        <Stack spacing={2}>
          <Pagination
            count={countPokemons}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
            data-testid="pagination"
          />
        </Stack>
      )}
    </ContainerPagination>
  );
};

export default PaginationController;
