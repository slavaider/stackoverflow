import React, { FC, useCallback, useEffect } from "react";

import { Chip, Pagination } from "@mui/material";
import { setOptions } from "@store/actions/questions/questionsActions";
import { FETCH_QUESTIONS } from "@store/actionTypes";
import IQuestion from "@store/model/IQuestion";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/Loader";
import OptionsChoose from "./components/OptionsChoose/OptionsChoose";
import QuestionCard from "./components/QuestionCard";

const Questions: FC = () => {
  const questions = useSelector((state: RootState) => state.questions.items);
  const options = useSelector((state: RootState) => state.questions.options);
  const error = useSelector((state: RootState) => state.questions.error);
  const loading = useSelector((state: RootState) => state.questions.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_QUESTIONS,
      payload: options,
    });
  }, [options]);

  const choosePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      dispatch(setOptions({ ...options, page: value }));
    },
    []
  );

  return (
    <>
      <OptionsChoose />
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
