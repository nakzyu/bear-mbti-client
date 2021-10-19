import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Option as OptionType } from "../types/option";

type Props = {
  onOptionSelected: (questionIndex: number, optionIndex: number) => void;
  questionIndex: number;
  optionIndex: number;
  selected: boolean;
};

export default function Option({
  text,
  questionIndex,
  optionIndex,
  onOptionSelected,
  selected,
}: OptionType & Props) {
  const [selectedColor] = useState(selected);
  useEffect(() => {
    return;
  }, [selectedColor]);

  return (
    <Card
      selected={selected}
      onClick={() => onOptionSelected(questionIndex, optionIndex)}
    >
      <OptionText selected={selected}>{text}</OptionText>
    </Card>
  );
}

type CardProps = {
  selected: boolean;
  theme: Record<string, string>;
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
  min-heigth:100px
  color: ${(props: CardProps) =>
    props.selected ? "#f7f7f7" : "rgba(0, 0, 0, 0.8)"};
`;
