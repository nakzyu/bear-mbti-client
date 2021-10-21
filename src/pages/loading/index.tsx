import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { SinglePageContent, Title } from "../../styles/components";
import AutoTicker from "../../components/autoTicker";

const Loading: NextPage = () => {
  const history = useRouter();
  const { sports: sportQuery } = history.query;
  const [sports] = useState(sportQuery);

  useEffect(() => {
    const go = setTimeout(() => {
      history.replace(`/result/${sports}`);
    }, 3000);

    return () => {
      clearTimeout(go);
    };
  }, [history, sports]);

  return (
    <SinglePageContent>
      <PositioningDiv>
        <Title>
          결과 분석 중<AutoTicker text={"..."} duration={500} />
        </Title>
        <LoadingImg src="images/loading.png" />
      </PositioningDiv>
    </SinglePageContent>
  );
};

export default Loading;

const PositioningDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
`;

const LoadingImg = styled.img`
  z-index: -1;
  position: relative;
  max-width: 500px;
  max-height: 500px;
  animation-name: rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;

  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
