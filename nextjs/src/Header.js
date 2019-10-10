import React, {Component} from 'react';
import client from '../client';

import { fab } from '@fortawesome/free-brands-svg-icons'

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
                        {
                            this.props.menu?
                            this.props.menu.filter(
                                item => item.socialMedia
                            ).sort((a,b) => a.order<b.order?1:-1).map(
                                    item => {
                                    return <li key={item.slug} className="text">
                                            <a className="socialMedia" href={item.linkString}>
                                                <FontAwesomeIcon icon={fab[item.iconClass]} size="4x"/>
                                            </a>
                                        </li>
                                    })
                                :<div></div>
                        }

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
                            font-size: 1em;
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
                                min-height: 160px;
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
                            ul {
                                padding: 0;
                            }
                            .socialMedia {
                                width: 28px;
                            }
                        }
                        `}
                    </style>
                </div>
            )
    }
}

export default Cover
