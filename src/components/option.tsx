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
}: OptionType & Props): JSX.Element {
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
};

const Card = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 30%;
  margin: 20px 0px;
  padding: 20px;

  background-color: ${(props: CardProps) =>
    props.selected ? "#0433ff" : "#f7f7f7"};
  color: ${(props: CardProps) => (props.selected ? "#f7f7f7" : "")};

  border-radius: 4px;

  :active {
    transition: 0.15s ease-in-out;
    background: #0433ff;

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
