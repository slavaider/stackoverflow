import IOwner from "@store/model/IOwner";

export interface IAnswer {
  owner: IOwner;
  is_accepted: boolean;
  score: number;
  answer_id: number;
  question_id: number;
}
