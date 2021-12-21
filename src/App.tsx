import React, { useEffect } from "react";

import authPerson from "@store/actions/authActions";
import store from "@store/store";
import { Provider, useDispatch } from "react-redux";

import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Auth />
      <Questions />
    </Provider>
  );
};

export default App;
