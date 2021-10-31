import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="운동하는 곰돌이 테스트" />
          <link rel="preload" href="/images/loading.png" as="image" />
          <meta
            name="keywords"
            content="운동 테스트, 운동 mbti 테스트, 운동 mbti, mbti테스트, 성격검사, 성격테스트, mbti, 곰돌이 테스트, 운동하는 곰돌이 테스트"
          />
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.js"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-L6NM1NYDS7"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L6NM1NYDS7');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
