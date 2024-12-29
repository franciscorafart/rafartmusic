'use server';

import React from 'react';
import client from '../../client';
import { urlFor } from '../utils';

import './style.css';

const About = async () => {
    const sanityProps = await getInitialProps();
    const imageURL = urlFor(sanityProps.about.image.asset._ref);
    
    return(
            <div className="container">
                <h1 className="text-about title">About</h1>
                <div className="aboutContainer">
                    <div className="imageDiv">
                        <img src={imageURL}/>
                    </div>
                    <div className="textDiv">
                        {sanityProps?.about?.paragraph?.map(p => {
                            const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "text-about bold": "text-about";
                            return <p className={className}>{p.children[0]['text']}</p>;
                        })}

                    </div>
                </div>
            </div>
    );
};


const getInitialProps = async () => {
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
    const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, headerMenu, socialMedia, iconClass}');
    const about = await client.fetch('*[_type == "content" && slug.current == "about"][0]{name, slug, image, paragraph}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

    return {
        logo: logo,
        coverImage: coverImage,
        menu: menu,
        favicon: favicon,
        about: about,
    };
};

export default About;


