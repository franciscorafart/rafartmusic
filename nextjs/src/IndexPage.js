import React, {Component} from 'react';
import Head from 'next/head';

class IndexPage extends Component {
    render(){
        return(
            <div>
                <Head>
                    <title>Rafartmusic</title>
                    <meta name="description" content="Rafart Champan stick music"/>
                    <meta name="keywords" content="Rafart,Chapman Stick,Electronic Rock,Progressive rock"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap" rel="stylesheet"/>

                    <script src="https://kit.fontawesome.com/0b202351e9.js" crossorigin="anonymous"></script>

                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>
                    <style type="text/css">{`
                    	#mc_embed_signup{
                            background: white;
                            clear:left;
                            font:14px Helvetica,Arial,sans-serif;
                        }
                    `}</style>
                    <style type="text/css">{`
                    	#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
                    	#mergeRow-gdpr {margin-top: 20px;}
                    	#mergeRow-gdpr fieldset label {font-weight: normal;}
                    	#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
                    `}
                    </style>
                </Head>
            </div>
        );
    }
}

export default IndexPage;
