import { AUTH } from "@store/actions/actionTypes";
import { IAuthAction } from "@store/types";

export default function authPerson(token: string): IAuthAction {
  return {
    type: AUTH,
    payload: token,
  };
}
