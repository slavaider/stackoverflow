import React, { FC, useEffect } from "react";

import api from "@config/api";
import Button from "@mui/material/Button";
import authPerson from "@store/actions/authActions";
import { useDispatch } from "react-redux";

const Auth: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash.slice(1).split("&");
    const token = hash[0].split("=")[1];

    dispatch(authPerson(token));
  }, [window.location.hash]);

  function onSomeButtonClicked() {
    dispatch({ type: "USER_FETCH_REQUESTED", payload: "" });
  }

  return (
    <div>
      <a
        rel="noreferrer"
        href={`https://stackoverflow.com/oauth/dialog?client_id=${api.client_id}&redirect_uri=${window.location.href}`}
      >
        to heaven
      </a>
      <Button variant="contained" onClick={onSomeButtonClicked}>
        Hello World
      </Button>
    </div>
  );
};

export default Auth;
