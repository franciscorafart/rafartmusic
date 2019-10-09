import React, {Component} from 'react';
import client from '../client';
import { Link } from 'next/link';

import { faFacebook, faSpotify, faInstagram, faYoutube, faSoundcloud, faMedium } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cover extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="header">
                    <div className="one-quarter logo-div">
                        <img src={this.props.urlFor(this.props.logo.mainImage.asset._ref)}/>
                    </div>
                    <div className="half header-div">
                        <ul className="menuItems">
                        {
                            this.props.menu?
                            this.props.menu.filter(
                                item => item.headerMenu
                            ).sort(
                                (a,b) => a.order<b.order?-1:1).map(
                                    item => {
                                    return <li
                                        key={item.slug}
                                        className="text"
                                    >
                                        <a
                                            href={item.linkString}
                                            className={item.slug === this.props.selectedPage? 'selected': ''}
                                        >{item.title}</a>
                                    </li>
                                })
                            :
                            <li className="text">Menu Loading...</li>
                        }
                        </ul>
                    </div>
                    <div className="one-quarter header-div">
                        <ul className="menuItems">
                            <li className="text">
                                <a className="socialMedia" href="https://www.facebook.com/fjrafart/">
                                    <FontAwesomeIcon icon={faFacebook} size="4x"/>
                                </a>
                            </li>
                            <li className="text">
                                <a className="socialMedia" href={"https://open.spotify.com/artist/3EIxblOsWLuH54ZRWDuw1m?si=bg0n-AiKSFOhQ_cJmMszUw"}>
                                <FontAwesomeIcon icon={faSpotify}/>
                                </a>
                            </li>
                            <li className="text">
                                <a className="socialMedia" href={"https://www.youtube.com/franciscorafart"}>
                                <FontAwesomeIcon icon={faYoutube}/>
                                </a>
                            </li>
                            <li className="text">
                                <a className="socialMedia" href={"https://www.instagram.com/rafartstick/"}>
                                <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </li>
                            <li className="text">
                                <a className="socialMedia" href={"https://soundcloud.com/f-j-rafart"}>
                                <FontAwesomeIcon icon={faSoundcloud}/>
                                </a>
                            </li>
                            <li className="text">
                                <a className="socialMedia" href={"https://medium.com/@francisco.rafart"}>
                                <FontAwesomeIcon className="icon" icon={faMedium}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <style jsx>{`
                        .header {
                            min-height: 50px;
                            width: 100%;
                            display: flex;
                            flex-direction: row;
                        }
                        .text{
                            font-family: 'Encode Sans Expanded', sans-serif;
                            font-size: 0.8em;
                            color: white;
                            list-style-type: none;
                        }
                        .one-quarter {
                            width: 25%;
                            height 40px;
                        }
                        .one-quarter img{
                            height: 30px;
                            margin: 10px 0 0 20px;
                        }
                        .half {
                            width: 50%;
                        }
                        .socialMedia {
                            display: block;
                            width: 20px;
                        }
                        a {
                            text-decoration: none;
                            color: white;
                        }
                        svg {
                            aria-hidden: false;
                        }
                        .menuItems {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                        }
                        .menuItems a:hover {
                            color: #c4ed21;
                        }
                        .selected {
                            color: #c4ed21;
                        }
                        @media all and (max-width: 750px) {
                            .header {
                                flex-direction: column;
                            }
                            .header-div {
                                width: 100%;
                                margin: 10px 0 10px 0;
                            }
                            .logo-div {
                                display: none;
                            }
                            .menuItems {
                                flex-direction: row;
                                justify-content: space-around;
                            }
                            a {
                                text-align: center;
                                padding: 10px;
                                border-top: 1px solid rgba(255,255,255,0.3);
                                border-bottom: 1px solid rgba(0,0,0,0.1);
                            }
                            .menuItems li:last-of-type a {
                                border-bottom: none;
                            }
                        }
                        `}
                    </style>
                </div>
            )
    }
}

export default Cover
