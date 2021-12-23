import { AUTH } from "@store/reducers/actionTypes";

export interface IAuthAction {
  type: typeof AUTH;
  payload: string;
}
