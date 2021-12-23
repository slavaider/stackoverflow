import { IAuthAction } from "@store/actions/auth/types";
import { AUTH } from "@store/reducers/actionTypes";

export default function authPerson(token: string): IAuthAction {
  return {
    type: AUTH,
    payload: token,
  };
}
