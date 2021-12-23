export enum Order {
  desc = "desc",
  asc = "asc",
}
export enum Sort {
  activity = "activity",
  creation = "creation",
  votes = "votes",
}
export default interface IOptions {
  order: Order | string;
  pagesize: number;
  sort: Sort | string;
  page: number;
}
