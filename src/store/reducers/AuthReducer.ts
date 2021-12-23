import { IAuthAction } from "@store/actions/auth/types";
import { AUTH } from "@store/reducers/actionTypes";

interface IAuth {
  token: string;
}

const initialState: IAuth = {
  token: "",
};

export default function AuthReducer(
  state = initialState,
  action: IAuthAction
): IAuth {
  switch (action.type) {
    case AUTH: {
      return {
        token: action.payload,
      };
    }
    default:
      return state;
  }
}
