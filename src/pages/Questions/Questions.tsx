import React, { FC, useCallback, useEffect, useState } from "react";

import { Chip, Pagination } from "@mui/material";
import { FETCH_QUESTIONS } from "@store/actionTypes";
import IOptions, { Order, Sort } from "@store/model/IOptions";
import IQuestion from "@store/model/IQuestion";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/Loader";
import OptionsChoose from "./components/OptionsChoose/OptionsChoose";
import QuestionCard from "./components/QuestionCard";

const Questions: FC = () => {
  const questions = useSelector((state: RootState) => state.questions.items);
  const error = useSelector((state: RootState) => state.questions.error);
  const loading = useSelector((state: RootState) => state.questions.loading);
  const dispatch = useDispatch();

  const [options, setOptions] = useState<IOptions>({
    order: Order.asc,
    sort: Sort.activity,
    pagesize: 5,
    page: 1,
  });

  useEffect(() => {
    dispatch({
      type: FETCH_QUESTIONS,
      payload: options,
    });
  }, [options]);

  const changeOptions = (newOptions: IOptions): void => {
    setOptions(newOptions);
  };

  const choosePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setOptions((prev) => ({ ...prev, page: value }));
    },
    []
  );

  return (
    <>
      <OptionsChoose changeOptions={changeOptions} options={options} />
      {error && (
        <Chip
          sx={{ display: "flex", justifyContent: "center" }}
          label={error.message}
          color="warning"
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        questions?.map((question: IQuestion) => (
          <QuestionCard key={question.question_id} item={question} />
        ))
      )}
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          my: "5px",
        }}
        variant="outlined"
        color="standard"
        count={10000}
        page={options.page}
        onChange={choosePage}
      />
    </>
  );
};

export default Questions;
