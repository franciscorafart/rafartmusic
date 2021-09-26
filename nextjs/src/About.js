import React from 'react';

const About = (props = {}) => {
    return(
        <div className="container">
            <h1 className="text title">About</h1>
            <div className="aboutContainer">
                <div className="imageDiv">
                    {props && props.urlFor && <img src={props.urlFor(props.about.image.asset._ref)}/>}
                </div>
                <div className="textDiv">
                    {props && props.about && props.about.paragraph.map(p => {

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
                }
                .imageDiv {
                    width: 30%;
                    margin-top: 10px;
                }
                .imageDiv img {
                    width: 100%;
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
                    .text {
                        padding: 0 10px 0 10px;
                    }
                    .imageDiv {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                    .imageDiv img {
                        width: 50%;
                    }
                }
            `}</style>
        </div>
    );
}

export default About;
