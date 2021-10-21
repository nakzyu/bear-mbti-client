export type HeadTag = { property: string; content: string };

export type Freqs = [string, number][];

export enum Indicators {
  Extraversion,
  Introversion,
  Sensing,
  INtuition,
  Thinking,
  Feeling,
  Judging,
  Perceiving,
}

export type Option = {
  text: Readonly<string>;
  selected: boolean;
  type: Indicators;
};

export type Question = {
  direction: Readonly<string>;
  options: Option[];
};

export type Result = {
  type: string;
};
