import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { Indicators } from "../../types/indicators";
import { Question } from "../../types/question";
import { postResult } from "../../utils/api";
import mapMbtiToSports from "../../data/mapMbtiToSports";
import { Block, SinglePageContent, Title } from "../../styles/components";
import Back from "../../components/back";
import ProgressBar from "../../components/progressBar";
import Direction from "../../components/direction";
import Option from "../../components/option";
import styled from "styled-components";

const QuestionPage: NextPage = () => {
  const history = useRouter();
  const {
    i,
    setIndex,
    progressRate,
    setProgressRate,
    questions,
    onOptionSelected,
  } = useForm();

  useEffect(() => {
    setProgressRate(calcProgressRate(questions));
  }, [questions]);

  useEffect(() => {
    if (progressRate === 1) {
      const mbtiType = calcMBTI(questions);

      try {
        postResult({
          type: mbtiType,
        });
      } catch (e) {
        console.log(e);
      }

      const sports = (mapMbtiToSports as Record<string, string>)[mbtiType];
      history.replace(`/loading?sports=${sports}`);
      return;
    }
  }, [progressRate]);

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
    <SinglePageContent>
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
    </SinglePageContent>
  );
};

const Ul = styled.ul`
  width: inherit;
  max-height: 200px;
  max-width: 500px;
  flex: 1.5;
`;

export default QuestionPage;
