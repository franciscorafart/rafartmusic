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
                </div>
            <style jsx>{`
                .intro {
                    width: 40%;
                }
                .intro img {
                    width: 100%;
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
            `}
            </style>
            </div>
        );
    }
}

export default Intro;
