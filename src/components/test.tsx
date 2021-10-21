import { NextRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import ProgressBar from "../components/progressBar";
import Direction from "../components/direction";
import Option from "../components/option";
import Back from "../components/back";
import { useForm } from "../hooks/useForm";
import { useAni } from "../hooks/useAni";

import { Indicators, Question } from "../types";
import { postResult } from "../utils/api";
import { mapMbtiToSports } from "../data/mapMbtiToSports";

import { Block, Title } from "../styles/components";
import { showUp } from "../styles/keyframes";

type TestProps = {
  router: NextRouter;
};

export default function Test({ router }: TestProps): JSX.Element {
  const {
    i,
    setIndex,
    progressRate,
    setProgressRate,
    questions,
    onOptionSelected,
  } = useForm();

  const { active, start, duration } = useAni(1000);

  useEffect(() => {
    setProgressRate(calcProgressRate(questions));
  }, [questions, setProgressRate]);

  useEffect(() => {
    if (progressRate === 1) {
      const mbtiType = calcMBTI(questions);

      const sports = (mapMbtiToSports as Record<string, string>)[mbtiType];
      postResult({
        type: sports,
      });
      router.replace(`/loading?sports=${sports}`);
      return;
    }
  }, [progressRate, questions, router]);

  const calcProgressRate = (questions: Question[]): number => {
    const d = questions.length;
    const n = questions
      .map((q) => !!q.options.find((o) => o.selected === true))
      .filter((boolean) => boolean).length;
    return n / d;
  };

  const calcMBTI = (questions: Question[]): string => {
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

  return (
    <>
      <Block flex={0.4} />
      <Back i={i} setIndex={setIndex} />
      <ProgressBar rate={progressRate} />
      <Title>
        <p>Q.{i + 1}</p>
      </Title>
      <Direction text={questions[+i].direction} />
      <Ul
        onClick={() => {
          start();
        }}
        active={active}
        duration={duration}
      >
        {questions[+i].options.map((option, optionIndex) => (
          <Option
            key={option.type}
            {...option}
            optionIndex={optionIndex}
            questionIndex={i}
            selected={option.selected}
            onOptionSelected={onOptionSelected}
          />
        ))}
      </Ul>
      <Block flex={1} />
    </>
  );
}

type UlProps = {
  active: boolean;
  duration: number;
};

const Ul = styled.ul`
  width: inherit;
  max-height: 200px;
  max-width: 500px;
  flex: 1.5;
  ${(props: UlProps) =>
    props.active
      ? css`
          animation: ${showUp} ease-out ${props.duration / 1000}s;
        `
      : ""}
  pointer-events: ${(props) => (props.active ? "none" : "all")};
`;
