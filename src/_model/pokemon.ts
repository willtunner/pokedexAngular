import { Type } from "./type";


export interface Pokemon {
  id: number;
  name: string;
  image: string,
  types: Type[];
}
