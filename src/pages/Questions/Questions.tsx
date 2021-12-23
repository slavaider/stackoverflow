import React, { FC, useCallback, useEffect, useState } from "react";

import { Pagination } from "@mui/material";
import IOptions, { Order, Sort } from "@store/model/IOptions";
import IQuestion from "@store/model/IQuestion";
import { FETCH_QUESTIONS } from "@store/reducers/actionTypes";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/Loader";
import OptionsChoose from "./components/OptionsChoose/OptionsChoose";
import QuestionCard from "./components/QuestionCard";

const Questions: FC = () => {
  const questions = useSelector((state: RootState) => state.questions.items);
  const loading = useSelector((state: RootState) => state.questions.loading);
  const token = useSelector((state: RootState) => state.auth.token);
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
      token,
    });
  }, [options]);

  const changeOptions = (newOptions: IOptions): void => {
    setOptions(newOptions);
  };

  const choosePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setOptions({ ...options, page: value });
    },
    []
  );

  return (
    <>
      <OptionsChoose changeOptions={changeOptions} options={options} />
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
