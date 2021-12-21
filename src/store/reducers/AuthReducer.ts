import { AUTH } from "@store/actions/actionTypes";
import { IAuth, IAuthAction } from "@store/types";

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
