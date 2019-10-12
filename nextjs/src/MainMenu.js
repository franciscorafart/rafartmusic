import React, {Component} from 'react'
import client from '../client'

class MainMenu extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2 className="text bigText">Main Menu</h2>
                <div
                className="boxContainer"
                style = {
                    {
                    backgroundImage: `url(${this.props.urlFor(this.props.menuBackground.mainImage.asset._ref)})`,
                    // opacity: 0.5;
                    }
                }
                >
                    {
                        this.props.menu.filter(item => item.mainMenu).map(
                            item => {
                                return <div className="box" key={item.slug}>
                                        <h3 className="text">{item.title}</h3>
                                        <a href={item.linkString}>
                                            {
                                                item.mainImage.asset?
                                                <div
                                                    className="pageLink"
                                                    style = {{backgroundImage: `url(${this.props.urlFor(item.mainImage.asset._ref)})`}}
                                                ></div>
                                                :
                                                <div>{item.title}</div>
                                            }
                                        </a>
                                </div>
                            })
                    }
                </div>
                    <style jsx>{`
                            .h3Container {
                                padding-bottom: 40px;
                            }
                            .text{
                                font-family: 'Encode Sans Expanded', sans-serif;
                                color: white;
                                text-align: center;
                            }
                            .bigText {
                                font-size: 2em;
                            }
                            .boxContainer{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: space-around;
                                align-items: flex-start;
                                min-height: 500px;
                                margin: 80px 0 80px 0;
                            }
                            .box {
                                width:200px;
                                padding: 10px;
                            }
                            .pageLink {
                                height: 200px;
                                width: 200px;
                                background-size: 200px 200px, cover;
                            }
                            @media only screen and (max-width:650px){
                                .skills-container {
                                    width: 100%;
                                    margin-left: 0;
                                }

                            }
                        `}
                    </style>
            </div>
        )
    }
}

export default MainMenu
