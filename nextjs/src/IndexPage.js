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
                            background:#fff;
                            clear:left;
                            font:14px Helvetica,Arial,sans-serif;
                        }
                    `}</style>
                    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                    <script type='text/javascript'>{`
                        (function($) {
                            window.fnames = ['EMAIL', 'FNAME', 'LNAME', 'ADDRESS', 'PHONE', 'BIRTHDAY'];
                            window.ftypes = ['email', 'text', 'text', 'address', 'phone', 'birthday'];
                        }(jQuery)
                        );
                        var $mcj = jQuery.noConflict(true);
                        `}
                    </script>
                </Head>
            </div>
        );
    }
}

export default IndexPage;
