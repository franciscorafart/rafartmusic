import React from 'react';

import Cover from '../../src/Cover';
import Header from '../components/Header';
import Footer from '../../src/Footer';
import { userAgent } from "next/server";
import { urlFor } from '../utils';

export async function getServerSideProps(context) {
    const ua = userAgent(context.req); // Extracts user agent information
    const deviceType = ua.isMobile ? 'mobile' : ua.isTablet ? 'tablet' : 'desktop';
    console.log('device')
    return {
      props: {
        deviceType,
      },
    };
  }

const Page = props => {
    const { device } = userAgent({ headers: headers() });
    const isMobile = device?.type === "mobile"
    console.log('props.device', props.deviceType)

    let cover = <Cover
        urlFor={urlFor}
        coverImage={props.coverImage}
        rafart1={props.rafart1}
        menu={props.menu}
        logo={props.logo}
        isMobile={isMobile}
    />;

    return(
        <div className="website_div">
            {props.favicon && urlFor && <Header urlFor={urlFor} favicon={props.favicon}/>}
            <div>
                {cover}
                {props.children}
                <Footer
                    urlFor={urlFor}
                    menu={props.menu}
                    isMobile={isMobile}
                />
                <style jsx global>{`
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: black;
                    }
                `}
                </style>
                <style jsx>{`
                    .website_div{
                        width:100%;
                    }
                `}
                </style>

            </div>
        </div>
    );
};

export default Page;
