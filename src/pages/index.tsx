import type { NextPage } from "next";
import Link from "next/link";
import {
  Block,
  Button,
  SinglePageContent,
  ImgCard,
  Subtitle,
  Title,
} from "../styles/components/";

const Landing: NextPage = () => {
  return (
    <SinglePageContent>
      <Block flex={0.5} />
      <Title>운동하는 곰돌이 테스트</Title>
      <Subtitle>나의 곰돌이 찾기</Subtitle>
      <ImgCard src="images/title.png" alt="title-image" />
      <Block flex={0.5}>
        <Link href="/q" passHref>
          <Button>시작</Button>
        </Link>
      </Block>
      <Block flex={1} />
    </SinglePageContent>
  );
};

export default Landing;
