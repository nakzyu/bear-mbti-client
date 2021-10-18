import { useState } from "react";
import { Questions } from "../data/questions";
import { Question } from "../types/question";

export const useForm = (): {
  i: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  questions: Question[];
  progressRate: number;
  setProgressRate: React.Dispatch<React.SetStateAction<number>>;
  onOptionSelected: (questionIndex: number, optionIndex: number) => void;
} => {
  const [i, setIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>(Questions);
  const [progressRate, setProgressRate] = useState<number>(0);

  const onOptionSelected = (questionIndex: number, optionIndex: number) => {
    setQuestions(
      [...questions].map((q, qI) => {
        if (questionIndex === qI)
          return {
            ...q,
            options: q.options.map((option, oI) => {
              if (optionIndex === oI)
                return {
                  ...option,
                  selected: true,
                };
              return {
                ...option,
                selected: false,
              };
            }),
          };
        return q;
      })
    );

    const next = i + 1;
    const end = questions.length;
    if (next === end) {
      return;
    }
    setIndex(next);
  };

  return {
    i,
    setIndex,
    questions,
    progressRate,
    setProgressRate,
    onOptionSelected,
  };
};
