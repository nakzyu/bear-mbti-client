import type { NextPage } from "next";
import Link from "next/link";

import {
  Block,
  Button,
  SinglePageContent,
  ImgCard,
  Subtitle,
  Title,
  ImgContaier,
} from "../styles/components/";

const Landing: NextPage = () => {
  return (
    <SinglePageContent>
      <Block flex={0.5} />
      <Title>운동하는 곰돌이 테스트</Title>
      <Subtitle>내 성향에 어울리는 운동은 무엇일까?</Subtitle>
      <ImgContaier>
        <ImgCard src="images/title.png" alt="title-image" />
      </ImgContaier>
      <Block flex={0.5}>
        <Link href="/q" passHref>
          <Button>시작하기</Button>
        </Link>
      </Block>
      <Block flex={1} />
    </SinglePageContent>
  );
};

export default Landing;
