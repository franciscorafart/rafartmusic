import React from 'react';

const Albums = props => {
    return (
        <div className="container">
            <h1 className="text albumTitle">Releases</h1>
            <div className="albumContainer">
            {props && props.albums && props.albums.map(a => {
                return <div className="album" key={a.slug}>
                    <h2 className="text albumTitle">{`${a.title} - ${a.year || ''} ${a.releaseType}`}</h2>
                    <div className="albumInfo">
                        <div className="imageDiv">
                            {props.urlFor && <img src={props.urlFor(a.cover.asset._ref)}/>}
                            {
                            a.bandcamp?
                                <form action={a.bandcamp}>
                                    <input className="callToAction text" type="submit" value="Buy on Bandcamp"/>
                                </form>: <div></div>
                            }
                            {
                                a.spotify?
                                <form action={a.spotify}>
                                    <input className="callToAction text" type="submit" value="Listen on Spotify"/>
                                </form>: <div></div>
                            }
                            {
                                a.soundcloud?
                                <form action={a.soundcloud}>
                                    <input className="callToAction text" type="submit" value="Listen on Soundcloud"/>
                                </form>: <div></div>

                            }
                        </div>
                        <div className="textDiv">
                            {
                                a.paragraph.map(p => {
                                const className = p.children[0]['marks'].length>0 && p.children[0]['marks'][0] === "strong"? "paragraph text bold": "paragraph text"
                                return <p className={className}>{p.children[0]['text']}</p>;
                            })
                            }
                        </div>
                    </div>
                </div>;
            })}
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    margin: 60px 0 40px 0;
                }
                img {
                    width: 80%;
                    padding-left: 10%;
                }
                .albumContainer {
                    display: flex;
                    flex-direction: column;
                    padding: 0 1% 0 1%;
                }
                .album {
                    margin: 10px 0 10px 0;
                    border: 1px solid gray;
                }
                .albumInfo {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    padding: 10px 0 10px 0;
                    justify-content: space-around;
                }
                .textDiv {
                    flex-basis: auto;
                    width: 60%;
                    margin-top: 10px;
                    float: left;
                }
                .paragraph {
                    padding: 0 2% 0 2%;
                }
                .imageDiv {
                    width: 40%;
                    margin-top: 10px;
                }
                form {
                    width: 100%;
                    padding-left: 10%;
                }
                .text{
                    font-family: 'Encode Sans Expanded', sans-serif;
                    line-height: 1.5;
                    color: white;
                }
                .albumTitle {
                    text-align: center;
                }
                .callToAction {
                    width: 80%;
                    height: 30px;
                    background-color: #519ead;
                    margin: 10px 0 10px 0;
                }
                .bold {
                    font-size: 1.3em;
                }
                @media all and (max-width: 750px) {
                    .albumInfo {
                        flex-direction: column;
                        justify-content: center;
                    }
                    .textDiv {
                        width: 100%;
                    }
                    .imageDiv {
                        width: 100%;
                    }
                    img {
                        width: 50%;
                        padding-left: 25%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Albums;
