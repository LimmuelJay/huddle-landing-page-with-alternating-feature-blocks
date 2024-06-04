import Head from "next/head";
import GlobalStyles from "@/styles/globalstyled";
import IndexStyled from "@/pages/index.styled";
import Main from "@/pages/components/main/main"

export default function Home() {
  return (
    <IndexStyled>
      <GlobalStyles />
      <Head>
        <title>Huddle App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon-32x32.png" />
      </Head>
      <Main />
    </IndexStyled>
  );
}
