import { AUTH } from "@store/actionTypes";

export interface IAuthAction {
  type: typeof AUTH;
  payload: string;
}
