import React from 'react';
import Head from 'next/head';

const IndexPage = props =>  {
    return(
        <div>
            <Head>
                <title>RafartMusic</title>
                <meta name="description" content="Rafart Champan stick music"/>
                <meta name="keywords" content="Rafart,Chapman Stick,Electronic Rock,Progressive rock"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3F3QGZG209"></script>
                <script>{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3F3QGZG209');
                `}
</script>

                <link href={`https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap`} rel="stylesheet"/>
                {props.urlFor && props.favicon && <link rel="shortcut icon" type="image/png" href={`${props.urlFor(props.favicon.mainImage.asset._ref).url()}`}/>}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6827136611762793"
     crossorigin="anonymous"></script>
            </Head>
        </div>
    );
};

export default IndexPage;
