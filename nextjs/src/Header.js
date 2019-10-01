import React, {Component} from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'


class Cover extends Component{

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
                <div className="header">
                    <div className="one-quarter"
                    style = {{backgroundImage: `url(${this.props.urlFor(this.props.logo.mainImage.asset._ref)})`}}
                    >
                    </div>
                    <div className="half">
                        <ul className="menuItems">
                        {
                            this.props.menu?
                            this.props.menu.filter(item => item.headerMenu).map(item => {

                                return <li key={item.slug} className="text"><a href={item.linkString}>{item.title}</a></li>
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

                                return <li key={item.slug} className="text"><a href={item.linkString}><img src={this.props.urlFor(item.icon.asset._ref)}/></a></li>
                            })
                            :
                            <li className="text">Loading...</li>
                        }
                        </ul>
                    </div>
                    <style jsx>{`
                        .header {
                            height: 40px;
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
                        .half {
                            width: 50%;
                            float: left;
                        }
                        .menuItems img {
                            height: 30px;
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
                        `}
                    </style>
                </div>
            )
    }
}

export default Cover
