import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = props => {
    return(
        <div className="footer-bg">
            <footer className="footer-content">
                {
                    !props.isMobile &&
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
                        props.menu?
                        props.menu.filter(
                            item => item.socialMedia
                        ).sort((a,b) => a.order<b.order?1:-1).map(
                                item => {
                                return <li key={item.slug} className="text">
                                        <a className="socialMedia" href={item.linkString}>
                                            <FontAwesomeIcon icon={fab[item.iconClass]} size="4x"/>
                                        </a>
                                    </li>;
                                })
                            :<div></div>
                    }
                    </ul>
                </div>
            </footer>
            <style jsx>{`
                .footer-bg {
                    background-color: #14171F;
                    min-height: 200px;
                }
                .footer-content {
                    display: flex;
                    flex-direction:row;
                    justify-content: space-around;
                }
                .text {
                    font-family: 'Encode Sans Expanded', sans-serif;
                    font-size: 1em;
                    color: white;
                    list-style-type: none;
                }
                .one-third {
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    flex: 1;
                }
                .menuItems {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .socialMedia {
                    width: 20px;
                    height: 20px;
                    display: block;
                }
                a {
                    margin-top: 20px;
                    text-decoration: none;
                    color: white;
                }
                ul {
                    margin: 0px;
                    padding: 0px;
                }
                @media all and (max-width: 750px){
                    .footer-content {
                        flex-direction: column;
                    }
                    .one-third {
                        padding: 10px 20px 10px 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Footer;
