import Link from "next/link";
import { GetStaticPropsContext, NextPage } from "next";

import ShareButtons from "../../../components/shareButtons";

import { HeadTag } from "../../../types";
import genHead from "../../../utils/customHead";
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
      content: title + " 곰돌이",
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

  return (
    <>
      {genHead(headTags)}
      <ScrollableContent>
        <Block flex={0.5} />
        <Title>{title} 곰돌이</Title>
        <ImgContaier>
          <ImgCard src={`/images/${type}.png`} alt={`${type}-image`} />
        </ImgContaier>
      </ScrollableContent>
      <ColoredTitle>{subtitle}</ColoredTitle>
      <Content>{content}</Content>

      <ShareButtons
        hostUrl={host}
        resultUrl={resultUrl}
        typeImgSrc={imgSrcUrlForShare}
        title={title + " 곰돌이"}
        subtitle={subtitle}
      />
      <Link href="/" passHref>
        <Button>테스트 다시하기</Button>
      </Link>

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
    ([key]) => params && key === params.sports
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
