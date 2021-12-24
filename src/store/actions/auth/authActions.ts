import { IAuthAction } from "@store/actions/auth/types";
import { AUTH } from "@store/actionTypes";

export default function authPerson(token: string): IAuthAction {
  return {
    type: AUTH,
    payload: token,
  };
}
