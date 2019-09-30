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
                    <div>
                        {
                            this.props.menu.filter(item => item.mainMenu).map(
                                item => {
                                    console.log('item', item)
                                    return <div>
                                        <a href={item.linkString}>
                                            <h3 className="text">item.title</h3>
                                            <div
                                                className="boxContainer"
                                                style = {{backgroundImage: `url(${this.props.urlFor(item.icon.asset._ref)})`}}
                                            >
                                            Hallo
                                            </div>
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
                            }
                            .boxContainer{
                                display: flexbox;
                                flex-direction: column;
                                align-content: center;
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
