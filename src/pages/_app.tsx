import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { Container } from "../styles/components";
import theme from "../styles/theme";
import genHead from "../utils/customHead";
import { HeadTag } from "../types/headTag";

declare global {
  interface Window {
    Kakao: any;
  }
}

if (typeof window !== "undefined") {
  window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
}

const headTags: HeadTag[] = [
  {
    property: "og:title",
    content: "운동하는 곰돌이 테스트",
  },
  {
    property: "og:image",
    content: "/images/title.png",
  },
  {
    property: "og:url",
    content: process.env.NEXT_PUBLIC_CLIENT_URL as string,
  },
  {
    property: "og:description",
    content: "나의 곰돌이 찾기",
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {genHead(headTags)}
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <Space />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const Space = styled.div`
  width: 80vw;
  @media screen and (min-height: 900px) {
    height: 5vh;
    max-height: 400px;
  }
`;
