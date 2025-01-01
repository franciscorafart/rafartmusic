import Cover from "./components/Cover";
import Footer from './components/Footer';
import { isMobile, urlFor } from "./utils";
import client from "../client";
import { headers } from "next/headers";

import './global.css';

export const metadata = {
  title: 'Rafart Music',
  description: 'Website by Rafart Music Tech LLC',
};

export default async function RootLayout({ children, deviceType }) {
  const sanityProps = await getInitialProps();
  const hds = await headers();
  const userAgent = hds.get("user-agent") || "";
  const mobile = isMobile(userAgent);

  return (
    <html lang="en">
      
      <head>
        <title>RafartMusic</title>
          <meta name="description" content="Rafart Champan stick music"/>
          <meta name="keywords" content="Rafart,Chapman Stick,Electronic Rock,Progressive rock"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-3F3QGZG209"></script>
          <script>{`
            if (window !== undefined) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3F3QGZG209');
            }
              `}
          </script> */}

          <link href={`https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap`} rel="stylesheet"/>
          {sanityProps.favicon && <link rel="shortcut icon" type="image/png" href={`${urlFor(sanityProps.favicon.mainImage.asset._ref)}`}/>}
          <script 
              async 
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6827136611762793"
              crossOrigin="anonymous">
          </script>
      </head>
      <body>
        
        <main>
          <Cover mobile={mobile}/>
          {children}
          <Footer mobile={mobile} />
          </main>
      </body>
    </html>
  );
}

const getInitialProps = async () => {
  const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

  return {
      favicon: favicon,
  };
};
