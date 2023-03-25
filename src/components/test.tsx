import { NextRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import ProgressBar from "../components/progressBar";
import Direction from "../components/direction";
import Option from "../components/option";
import Back from "../components/back";
import { useForm } from "../hooks/useForm";
import { useAni } from "../hooks/useAni";

import { Question } from "../types";
import { calcMBTI } from "../utils/calcMBTI";
import { mapMbtiToSports } from "../data/mapMbtiToSports";

import { Block, Title } from "../styles/components";

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
      router.replace(`/loading?sports=${sports}`);
    }
  }, [progressRate, questions, router]);

  const calcProgressRate = (questions: Question[]): number => {
    const d = questions.length;
    const n = questions
      .map((q) => !!q.options.find((o) => o.selected === true))
      .filter((boolean) => boolean).length;
    return n / d;
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
      <Ul>
        {questions[+i].options.map((option, optionIndex) => (
          <Option
            start={start}
            active={active}
            duration={duration}
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

const Ul = styled.ul`
  width: inherit;
  max-height: 200px;
  max-width: 500px;
  flex: 1.5;
`;
