import React, {Component} from 'react';
import Head from 'next/head';

class IndexPage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Head>
                    <title>Rafartmusic</title>
                    <meta name="description" content="Rafart Champan stick music"/>
                    <meta name="keywords" content="Rafart,Chapman Stick,Electronic Rock,Progressive rock"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-79781872-1"></script>

                    <script>{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-79781872-1');
                    `}
                    </script>

                    <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" type="image/png" href={this.props.urlFor(this.props.favicon.mainImage.asset._ref)}/>
                </Head>
                <style jsx>{`
                    body {
                        margin: 0;
                        padding: 0;
                    }
                `}</style>
            </div>
        );
    }
}

export default IndexPage;
