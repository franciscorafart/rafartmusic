import React, {Component} from 'react';

class Intro extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="introContainer">
                <div className="intro">
                    <img src={this.props.urlFor(this.props.logo.mainImage.asset._ref)}/>
                    <h1 className="text">Chapman Stick and Electronic Prog-Rock Performer</h1>
                    <div>
                        <form action="/sign-up">
                            <input className="callToAction text textSmall" type="submit" value="Subscribe to my Newsletter"/>
                        </form>
                    </div>
                </div>
            <style jsx>{`
                .intro {
                    width: 40%;
                }
                .intro img {
                    width: 70%;
                    margin-left: 15%;
                }
                .introContainer {
                    padding: 80px 0 40px 0;
                    display: flex;
                    justify-content: center;
                }
                .text{
                    font-family: 'Encode Sans Expanded', sans-serif;
                    font-size: 2em;
                    color: white;
                    text-align: center;
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
            `}
            </style>
            </div>
        );
    }
}

export default Intro;
