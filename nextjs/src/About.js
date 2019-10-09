import React, {Component} from 'react';

class About extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <h1 className="text title">About</h1>
                <div className="aboutContainer">
                    <div className="imageDiv">
                        <img src={this.props.urlFor(this.props.about.image.asset._ref)}/>
                    </div>
                    <div className="textDiv">
                        {this.props.about.paragraph.map(p => {

                            const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "text bold": "text"
                            return <p className={className}>{p.children[0]['text']}</p>
                        })}

                    </div>
                </div>
                <style jsx>{`
                    .container {
                        width: 100%;
                        margin-top: 60px;
                        padding-bottom: 100px;
                    }
                    img {
                        width: 100%;
                    }
                    .aboutContainer {
                        display: flex;
                        flex-direction: row;
                        padding: 0 1% 0 1%;
                        justify-content: space-around;
                    }
                    .textDiv {
                        flex-basis: auto;
                        width: 60%;
                        margin-top: 10px;
                        float:left;
                    }
                    .imageDiv {
                        width: 30%;
                        margin-top: 10px;
                        float:left;
                    }
                    .text{
                        font-family: 'Encode Sans Expanded', sans-serif;
                        line-height: 1.5;
                        color: white;
                    }
                    .bold {
                        font-size: 1.3em;
                    }
                    .title {
                        text-align: center;
                    }
                    @media all and (max-width: 750px) {
                        .aboutContainer {
                            flex-direction: column;
                            justify-content: center;
                        }
                        .textDiv {
                            width: 100%;
                        }
                        .imageDiv {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                        }
                        img {
                            width: 50%;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default About;
