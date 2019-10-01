import React, {Component} from 'react'
import client from '../client'
import Ul from './Ul'

class MainMenu extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <section>
                    <div className="boxContainer">
                        {
                            this.props.menu.filter(item => item.mainMenu).map(
                                item => {
                                    return <div>
                                            <h3 className="text">{item.title}</h3>
                                            <a href={item.linkString}>
                                                {
                                                    item.icon.asset?
                                                    <div
                                                        className="box"
                                                        style = {{backgroundImage: `url(${this.props.urlFor(item.icon.asset._ref)})`}}
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
                                font-family: 'Lato', sans-serif;
                                color: white;
                                text-align: center;
                            }
                            .boxContainer{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: space-around;
                                align-items: flex-start;
                                height: 300px;
                                margin: 80px 0 80px 0;
                            }
                            .box {
                                height: 150px;
                                width: 150px;
                            }
                            @media only screen and (max-width:650px){
                                .skills-container {
                                    width: 100%;
                                    margin-left: 0;
                                }

                            }
                        `}
                    </style>
                </section>
            </div>
        )
    }
}

export default MainMenu
