import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  return (
    <Html>
      <Head />
      <body>
        <Main />
        {/* Scipt is only needed if you are not using the federation @ syntax when */}
        {/* setting your remotes. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="http://localhost:4173/assets/remote2.js" />
        <script src="http://localhost:3001/remote.js" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
