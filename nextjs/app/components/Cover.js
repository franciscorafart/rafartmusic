'use server'

import React from 'react'
import Script from 'next/script';
import './Cover.css';
import client from "../../client";
import { urlFor } from '../utils';

const stringScrollScript =`
    let lastScrollTop = 0;
    const navbar = document.querySelector('.paper');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
`

const Cover = async props => {
    const sanityProps = await getInitialProps()

    return(
        <div>
            <Script id="navbar-toggle" strategy="afterInteractive">
                {stringScrollScript}
            </Script>
            <section>
                {!props.mobile && <div className={"menuBar"}>
                        {
                            sanityProps.menu.filter(item => item.headerMenu).sort((a,b) => a.order > b.order ? 1 : -1).map(
                            (item, idx) => <div key={`${item.title}-${idx}`}>
                                <a className={`${"text"} ${"menuText"}`} href={item.linkString}>
                                    {item.title}
                                </a>
                            </div>
                            )
                        }
                    </div>
                }
                {
                    sanityProps && sanityProps.coverImage ?
                    <>
                        {props.mobile &&
                            <div 
                                className='paper' 
                            >
                                {sanityProps.menu.filter(item => item.headerMenu).sort((a,b) => a.order > b.order ? 1 : -1).map(
                                    (item, idx) => <div className='mobileMenuItem' mb='15px' key={`${item.title}-${idx}`}>
                                        <a className={`${"text"} ${"menuText"}`} href={item.linkString}>
                                            {item.title}
                                        </a>
                                    </div>
                                    )
                                } 
                            </div>
                        }
                        <div
                            className={"headerBg"}
                            style = {{backgroundImage: `url(${urlFor(sanityProps.coverImage.mainImage.asset._ref)})`}}
                            > 
                                <div className={"introContainer"}>
                                    <img className={"logo"} src={urlFor(sanityProps.logo.mainImage.asset._ref)}/>
                                    <span className={`${"text"} ${"subHeader"}`}>Chapman Stick and Electronic Rock</span>
                                </div>
                        </div>
                    </>:
                    <span className={"text"}>Loading...</span>
                }
            </section>
        </div>
    );
};


const getInitialProps = async () => {
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
    const menu = await client.fetch('*[_type == "menu"]{title, slug, order, linkString, headerMenu, socialMedia, iconClass}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

    return {
        logo: logo,
        menu: menu,
        coverImage: coverImage,
        favicon: favicon,
    };
};

export default Cover;
