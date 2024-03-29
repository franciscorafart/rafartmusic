// NOTE: This file deals with the stylesheet injection issue that made the refesh
// render without Material UI styles. I don't need the global style or stylesheet in the <link/> tag
// in this page. Commented out.

// https://developerhandbook.com/react/how-to-set-up-nextjs-material-ui/

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// import client from "../client";
// import imageUrlBuilder from '@sanity/image-url'

const theme = responsiveFontSizes(createMuiTheme());

class MyDocument extends Document {
  render() {

    // const builder = imageUrlBuilder(client);
    // const urlFor = source => builder.image(source);

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          /> */}
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  // const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

  return {
    ...initialProps,
    // favicon: favicon,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;