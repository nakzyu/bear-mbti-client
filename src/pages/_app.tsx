import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { Container } from "../styles/components";
import theme from "../styles/theme";

declare global {
  interface Window {
    Kakao: any;
  }
}

if (typeof window !== "undefined") {
  window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
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
