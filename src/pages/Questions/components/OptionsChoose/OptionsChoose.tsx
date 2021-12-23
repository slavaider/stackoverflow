import React, { FC, useCallback } from "react";

import { Box, MenuItem, TextField } from "@mui/material";
import IOptions, { Order, Sort } from "@store/model/IOptions";

export type OptionsChooseProps = {
  options: IOptions;
  changeOptions: (options: IOptions) => void;
};

const OptionsChoose: FC<OptionsChooseProps> = ({
  options,
  changeOptions,
}: OptionsChooseProps) => {
  const handleSort = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeOptions({
        ...options,
        sort: event.target.value,
      });
    },
    []
  );
  const handleOrder = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeOptions({
        ...options,
        order: event.target.value,
      });
    },
    []
  );
  const handlePageSize = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeOptions({
        ...options,
        pagesize: +event.target.value,
      });
    },
    []
  );

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        my: "5px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        focused
        color="success"
        variant="filled"
        id="outlined-select-sort"
        select
        label="Select"
        value={options.sort}
        onChange={handleSort}
        helperText="Please select your sort"
      >
        <MenuItem value={Sort.activity}>{Sort.activity}</MenuItem>
        <MenuItem value={Sort.creation}>{Sort.creation}</MenuItem>
        <MenuItem value={Sort.votes}>{Sort.votes}</MenuItem>
      </TextField>
      <TextField
        sx={{ mx: "5px" }}
        focused
        color="success"
        variant="filled"
        id="outlined-select-order"
        select
        label="Order"
        value={options.order}
        onChange={handleOrder}
        helperText="Please select your order"
      >
        <MenuItem value={Order.asc}>{Order.asc}</MenuItem>
        <MenuItem value={Order.desc}>{Order.desc}</MenuItem>
      </TextField>
      <TextField
        focused
        color="success"
        variant="filled"
        helperText="Please select your pagesize"
        label="PageSize"
        onChange={handlePageSize}
        value={options.pagesize}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
    </Box>
  );
};

export default OptionsChoose;
