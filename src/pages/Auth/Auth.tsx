import React, { FC, useEffect } from "react";

import api from "@config/api";
import Button from "@mui/material/Button";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const Auth: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      history.push(`/questions${location.hash}`);
    }
  }, [token]);

  return (
    <Button
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
      variant="contained"
      color="warning"
      href={`https://stackoverflow.com/oauth/dialog?client_id=${api.client_id}&redirect_uri=${window.location.href}&scope=write_access`}
    >
      Login to stackoverflow
    </Button>
  );
};

export default Auth;
