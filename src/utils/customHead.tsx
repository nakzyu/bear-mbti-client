import Head from "next/head";
import { HeadTag } from "../types/headTag";

const genHead = (tags: HeadTag[]): JSX.Element => {
  return (
    <Head>
      <title>운동하는 곰돌이 테스트</title>
      {tags.map(({ property, content }) => (
        <meta key={property} property={property} content={content} />
      ))}
    </Head>
  );
};

export default genHead;
