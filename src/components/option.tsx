import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { showUp } from "../styles/keyframes";

import { Option as OptionType } from "../types";

type OptionProps = {
  onOptionSelected: (questionIndex: number, optionIndex: number) => void;
  questionIndex: number;
  optionIndex: number;
  selected: boolean;
  active: boolean;
  duration: number;
  start: () => void;
};

export default function Option({
  text,
  questionIndex,
  optionIndex,
  onOptionSelected,
  selected,
  active,
  duration,
  start,
}: OptionType & OptionProps) {
  const [selectedColor] = useState(selected);
  useEffect(() => {
    return;
  }, [selectedColor]);

  return (
    <Card
      active={active}
      duration={duration}
      selected={selected}
      onClick={() => {
        onOptionSelected(questionIndex, optionIndex);
        start();
      }}
    >
      <OptionText selected={selected}>{text}</OptionText>
    </Card>
  );
}

type CardProps = {
  selected: boolean;
  theme: Record<string, string>;
  active: boolean;
  duration: number;
};

type OptionTextProps = {
  selected: boolean;
};

const Card = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 30%;
  margin: 20px 0px;
  padding: 20px;

  background-color: ${(props: CardProps) =>
    props.selected ? props.theme.MAIN_COLOR : "#f7f7f7"};
  color: ${(props: CardProps) => (props.selected ? "#f7f7f7" : "")};

  border-radius: 4px;

  ${(props: CardProps) =>
    props.active
      ? css`
          animation: ${showUp} ease-out ${props.duration / 1000}s;
        `
      : ""}
  pointer-events: ${(props) => (props.active ? "none" : "all")};

  :active {
    transition: 0.15s ease-in-out;
    background: ${(props: CardProps) => props.theme.MAIN_COLOR};
    p {
      color: #f7f7f7;
    }
  }
`;

const OptionText = styled.p`
  font-size: 16px;
  width: inherit;
  color: ${(props: OptionTextProps) =>
    props.selected ? "#f7f7f7" : "rgba(0, 0, 0, 0.8)"};
`;
