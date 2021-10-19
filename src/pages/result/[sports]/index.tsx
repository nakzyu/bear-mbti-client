import { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import ShareButtons from "../../../components/shareButtons";
import { sportsResults } from "../../../data/sportsResults";
import {
  Block,
  Button,
  Content,
  ImgCard,
  ImgContaier,
  ScrollableContent,
  Subtitle,
  Title,
} from "../../../styles/components";
import { HeadTag } from "../../../types/headTag";
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

  return (
    <>
      {genHead(headTags)}
      <ScrollableContent>
        <Block flex={0.5} />
        <Title>{title}하는 곰돌이</Title>
        <ImgContaier>
          {" "}
          <ImgCard src={`/images/${type}.png`} alt={`${type}-image`} />
        </ImgContaier>
      </ScrollableContent>
      <Subtitle>{subtitle}</Subtitle>
      <Content>{content}</Content>
      <ShareButtons
        hostUrl={host}
        resultUrl={resultUrl}
        typeImgSrc={imgSrcUrlForShare}
      />

      <Link href="/" passHref>
        <Button>나의 곰돌이 찾기</Button>
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
