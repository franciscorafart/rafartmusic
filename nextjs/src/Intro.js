import React, {Component} from 'react';

class Intro extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div className="introContainer">
                    <img className="rafart" src={this.props.urlFor(this.props.rafart1.mainImage.asset._ref)}/>
                    <img src={this.props.urlFor(this.props.logo.mainImage.asset._ref)}/>
                    <h1 className="text">Chapman Stick and Electronic Prog-Rock Performer</h1>
                    <div>
                        <form action="/sign-up">
                            <input className="callToAction text textSmall" type="submit" value="Subscribe to my Newsletter"/>
                        </form>
                    </div>
                </div>
            <style jsx>{`
                .introContainer {
                    width: 50%;
                    margin-left: 25%;
                    padding: 80px 0 40px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                img {
                    width: 70%;
                    margin-left: 15%;
                }
                .text{
                    font-family: 'Encode Sans Expanded', sans-serif;
                    font-size: 2em;
                    color: white;
                    text-align: center;
                }
                .rafart {
                    display: none;
                }
                .textSmall {
                    font-size: 1em;
                }
                .callToAction {
                    width: 60%;
                    margin: 20px 0 20px 20%;
                    height: 60px;
                    background-color: #519ead;
                }
                @media all and (max-width: 750px) {
                    .introContainer {
                        width: 80%;
                        margin-left: 10%;
                        padding: 20px 0 40px 0;
                    }
                    .intro img {
                        width: 100%;
                    }
                    .rafart {
                        display: block;
                        margin-bottom: 10px;
                    }
                    .textSmall {
                        font-size: 0.9em;
                    }
                    .callToAction {
                        width: 90%;
                        margin: 20px 0 20px 5%;
                    }
                }
            `}
            </style>
            </div>
        );
    }
}

export default Intro;
