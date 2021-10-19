import React from "react";
import styled from "styled-components";

type Props = {
  rate: number;
};

export default function ProgressBar({ rate }: Props) {
  return (
    <BarWrapper>
      <BarContent progressRate={rate * 100} />
    </BarWrapper>
  );
}

type BarContentProps = {
  progressRate: number;
  theme: Record<string, string>;
};

export const BarWrapper = styled.div`
  width: inherit;
  height: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f7f7f7;
  border-radius: 5px;

  margin: 15px 0px;

  max-width: 500px;
`;

export const BarContent = styled.div`
  width: ${(props: BarContentProps) => props.progressRate}%;
  height: inherit;
  border-radius: 5px;
  background-color: ${(props: BarContentProps) => props.theme.MAIN_COLOR};
  transition: width 0.2s ease-out 0s;
`;
