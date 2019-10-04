import React, {Component} from 'react'
import client from '../client'


class Cover extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="header">
                    <div className="one-quarter">
                        <img src={this.props.urlFor(this.props.logo.mainImage.asset._ref)}/>
                    </div>
                    <div className="half">
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
                                        <a href={item.linkString}>{item.title}</a>
                                    </li>
                                })
                            :
                            <li className="text">Menu Loading...</li>
                        }
                        </ul>
                    </div>
                    <div className="one-quarter">
                        <ul className="menuItems">
                        {
                            this.props.menu?
                            this.props.menu.filter(item => item.socialMedia).map(item => {

                                return <li
                                    key={item.slug}
                                    className="text"
                                >
                                    <a href={item.linkString}>
                                    <i className={item.iconClass}/>
                                    </a>
                                </li>
                            })
                            :
                            <li className="text">Loading...</li>
                        }
                        </ul>
                    </div>
                    <style jsx>{`
                        .header {
                            height: 50px;
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
                            float: left;
                        }
                        .one-quarter img{
                            height: 30px;
                            margin: 10px 0 0 20px;
                        }
                        .half {
                            width: 50%;
                            float: left;
                        }
                        a {
                            text-decoration: none;
                            color: white;
                        }
                        .menuItems {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                        }
                        .menuItems a:hover {
                            color: #c4ed21;
                        }
                        @media all and (max-width: 600px) {
                              .menuItems {
                                -webkit-flex-flow: column wrap;
                                flex-flow: column wrap;
                                padding: 0;
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
