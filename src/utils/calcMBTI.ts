import { Indicators, Question } from "../types";

export const calcMBTI = (questions: Question[]): string => {
  const acc: Record<Indicators, number> = {
    [Indicators.Extraversion]: 0,
    [Indicators.Introversion]: 0,
    [Indicators.INtuition]: 0,
    [Indicators.Sensing]: 0,
    [Indicators.Thinking]: 0,
    [Indicators.Feeling]: 0,
    [Indicators.Judging]: 0,
    [Indicators.Perceiving]: 0,
  };

  questions.forEach((question) =>
    question.options.forEach((option) => {
      if (option.selected) acc[option.type] += 1;
    })
  );

  const res = [
    acc[Indicators.Extraversion] > acc[Indicators.Introversion] ? "E" : "I",
    acc[Indicators.INtuition] > acc[Indicators.Sensing] ? "N" : "S",
    acc[Indicators.Thinking] > acc[Indicators.Feeling] ? "T" : "F",
    acc[Indicators.Judging] > acc[Indicators.Perceiving] ? "J" : "P",
  ];

  return res.join("");
};
