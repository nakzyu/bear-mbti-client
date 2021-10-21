import styled from "styled-components";

type Props = {
  text: string;
};

export default function Direction({ text }: Props) {
  return (
    <DirectionCard>
      <DirectionText>{text}</DirectionText>
    </DirectionCard>
  );
}

const DirectionCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const DirectionText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
  text-align: left;
  width: inherit;
  height: 90px;
`;
