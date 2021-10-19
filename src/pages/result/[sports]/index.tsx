import {
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
  NextPageContext,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import ShareButtons from "../../../components/shareButtons";
import { sportsResults } from "../../../data/sportsResults";
import {
  Block,
  Button,
  Content,
  ImgCard,
  ScrollableContent,
  Title,
} from "../../../styles/components";

type Props = {
  type: string;
  title: string;
  content: string;
};

const Result: NextPage<Props, JSX.Element> = ({
  type,
  title,
  content,
}: Props): JSX.Element => {
  const host = process.env.NEXT_PUBLIC_CLIENT_URL as string;
  const imgSrcUrlForShare = host + `/images/${type}.png`;
  return (
    <>
      <ScrollableContent>
        <Block flex={0.5} />
        <Title>{title} 곰돌이</Title>
        <ImgCard src={`/images/${type}.png`} alt={`${type}-image`} />
      </ScrollableContent>

      <Content>{content}</Content>
      <ShareButtons
        hostUrl={host}
        resultUrl={host + "result/" + type}
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
  ) as [string, { title: string; content: string }];

  return {
    props: {
      type: sports[0],
      title: sports[1].title,
      content: sports[1].content,
    },
  };
}
export default Result;
