import { Option } from "./option";

export type Question = {
  direction: Readonly<string>;
  options: Option[];
};
