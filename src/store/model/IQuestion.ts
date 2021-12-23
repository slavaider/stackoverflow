export interface IOwner {
  account_id: number;
  profile_image: string;
  display_name: string;
}
export default interface IQuestion {
  tags: string[];
  owner: IOwner;
  score: number;
  question_id: number;
  title: string;
}
