import { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import AutoTicker from "../../../components/autoTicker";
import ShareButtons from "../../../components/shareButtons";
import { sportsResults } from "../../../data/sportsResults";
import {
  Block,
  Button,
  ColoredTitle,
  Content,
  ImgCard,
  ImgContaier,
  ScrollableContent,
  Title,
} from "../../../styles/components";
import { HeadTag } from "../../../types/headTag";
import { getResult } from "../../../utils/api";
import genHead from "../../../utils/customHead";

type Props = {
  type: string;
  title: string;
  content: string;
  subtitle: string;
};

const Result: NextPage<Props, JSX.Element> = ({
  type,
  title,
  content,
  subtitle,
}: Props): JSX.Element => {
  const host = process.env.NEXT_PUBLIC_CLIENT_URL as string;
  const imgSrcUrlForShare = host + `/images/${type}.png`;
  const resultUrl = host + "/result/" + type;
  const headTags: HeadTag[] = [
    {
      property: "og:title",
      content: title + "하는 곰돌이",
    },
    {
      property: "og:image",
      content: imgSrcUrlForShare,
    },
    {
      property: "og:url",
      content: resultUrl,
    },
    {
      property: "og:description",
      content: subtitle,
    },
  ];

  const [rank, setRank] = useState<{ rank: number; percent: string }>();

  useEffect(() => {
    getResult().then((data) => {
      if (data) {
        const idx = data.findIndex(([sportType, _]) => sportType === type);
        if (idx >= 0) {
          const allFreqs = data.reduce((a, b) => a + b[1], 0);
          if (!allFreqs) return;
          setRank({
            rank: idx + 1,
            percent: ((data[idx][1] / allFreqs) * 100).toFixed(1),
          });
        }
      }
    });
  }, [type]);

  return (
    <>
      {genHead(headTags)}
      <ScrollableContent>
        <Block flex={0.5} />
        <Title>{title}하는 곰돌이</Title>
        <ImgContaier>
          <ImgCard src={`/images/${type}.png`} alt={`${type}-image`} />
        </ImgContaier>
      </ScrollableContent>
      <ColoredTitle>{subtitle}</ColoredTitle>
      <Content>{content}</Content>
      {rank && (
        <Content>
          이 유형은 전체 테스트 결과의 {rank?.percent}%에 속하며, {rank?.rank}위
          입니다.
        </Content>
      )}
      <ShareButtons
        hostUrl={host}
        resultUrl={resultUrl}
        typeImgSrc={imgSrcUrlForShare}
        title={title + "하는 곰돌이"}
        subtitle={subtitle}
      />
      <Link href="/" passHref>
        <Button>테스트 다시하기</Button>
      </Link>

      <Content>team.oeeeng@gmail.com</Content>
      <Block flex={1.5} />
    </>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(sportsResults).map((sports) => ({
    params: { sports: sports },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const sports = Object.entries(sportsResults).find(
    ([key, val]) => params && key === params.sports
  ) as [string, { title: string; content: string; subtitle: string }];

  return {
    props: {
      type: sports[0],
      title: sports[1].title,
      content: sports[1].content,
      subtitle: sports[1].subtitle,
    },
  };
}
export default Result;
