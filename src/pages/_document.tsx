import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <ColorModeScript initialColorMode={"light"} />
      <Head>
        <meta name="description" content="Jones Beach Gaming Manager" />
        <link rel="icon" href="/svg/main_logo1.svg" />
        <meta property="og:title" content="Jones Beach Gaming Manager"></meta>
        <meta
          property="og:description"
          content="Jones Beach Gaming Manager"
      ></meta>
        <meta property="og:type" content="website"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
