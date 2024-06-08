import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>TheSushiCo (Client)</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico:wght@400&display=swap");
body {
  margin: 0;
  line-height: normal;
}
input,
button,
textarea,
select {
  font: inherit;
}
`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
