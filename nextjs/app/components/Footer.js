import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import client from "../../client";
import './Footer.css';

const Footer = async () => {
    const sanityProps = await getInitialProps();

    return(
        <div className="footer-bg">
            <footer className="footer-content"> 
                
                    <ul className="menuItems">
                    {
                        sanityProps.menu?.filter(
                            item => item.socialMedia
                        ).sort((a,b) => a.order<b.order?1:-1).map(
                                item => {
                                const icon = fab[item.iconClass];
                                return (<li className="socialMedia" key={item.slug}>
                                        <a  href={item.linkString}><FontAwesomeIcon icon={icon} size='xs'/></a>
                                    </li>);
                                })
                    }
                    </ul>
            </footer>
        </div>
    );
};

export default Footer;

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

