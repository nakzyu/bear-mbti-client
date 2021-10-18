import { Indicators } from "../types/indicators";

export type Option = {
  text: Readonly<string>;
  selected: boolean;
  type: Indicators;
};
