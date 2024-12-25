import React from 'react';
import { faFacebook, fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import client from "../../client";
import './Footer.css'

const Footer = async props => {
    const sanityProps = await getInitialProps();

    return(
        <div className="footer-bg">
            <footer className="footer-content">
                {
                    !props.mobile &&
                    <div className="one-third">
                        {/* <p className='text'>Join my personal Discord</p><a className="socialMedia" href='https://discord.gg/RWF8P7yHaJ'><FontAwesomeIcon style={{display: 'inline'}} icon={fab['faDiscord']} size="4x"/></a> */}
                        {/* <p className="text">
                            This website is built with JAMstack. <a className="socialMedia" href="https://github.com/franciscorafart/rafartmusic">
                                <FontAwesomeIcon icon={fab['faGithub']} size="4x"/>
                            </a>
                        </p> */}
                    </div>
                }
                <div className="one-third" />
                <div className="one-third">
                
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
                </div>
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

