import IOwner from "./IOwner";

export default interface IQuestion {
  tags: string[];
  owner: IOwner;
  score: number;
  question_id: number;
  title: string;
}
