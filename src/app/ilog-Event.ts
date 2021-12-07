import { IlogData } from "./ilog-data";

export interface IlogEvent<T> {
  from: string,
  title: string,
  description: string,
  data: IlogData<T>,
}
