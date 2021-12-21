import React, { FC } from "react";

import { RootState } from "@store/store";
import { useSelector } from "react-redux";

const Questions: FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return <div>{token}</div>;
};

export default Questions;
