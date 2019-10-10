import React, {Component} from 'react';

class Albums extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <h1 className="text albumTitle">Albums</h1>
                <div className="albumContainer">
                {this.props.albums.map(a => {
                    return <div className="album" key={a.slug}>
                        <h2 className="text albumTitle">{`${a.title} - ${a.year || ''} ${a.releaseType}`}</h2>
                        <div className="albumInfo">
                            <div className="imageDiv">
                                <img src={this.props.urlFor(a.cover.asset._ref)}/>
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
                                <p className="description text">{a.description}</p>
                            </div>
                        </div>
                    </div>
                })}
                </div>
                <style jsx>{`
                    .container {
                        width: 100%;
                        margin: 60px 0 40px 0;
                    }
                    img {
                        width: 80%;
                        padding: 0;
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
                    .imageDiv {
                        width: 40%;
                        margin-top: 10px;
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
                        }
                    }
                `}</style>
            </div>
        );
    }
}
export default Albums;
