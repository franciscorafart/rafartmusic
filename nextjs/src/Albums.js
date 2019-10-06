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
                        <div className="oneThird">
                            <img src={this.props.urlFor(a.cover.asset._ref)}/>
                            {
                            a.bandcamp?
                                <form action={a.bandcamp}>
                                    <input className="callToAction text" type="submit" value="Buy on Bandcamp"/>
                                </form>: <div>Pico</div>
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
                        <div className="twoThirds">
                            <p className="description text">{a.description}</p>
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
                        width: 70%;
                        padding: 0;
                    }
                    .albumContainer {
                        display: flex;
                        flex-direction: column;
                        flex-wrap: no-wrap;
                        width: 100%;
                        padding: 20px 20px 0 20px;
                    }
                    .album {
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0 10px 0;
                        border: 1px solid gray;
                    }
                    .twoThirds {
                        width: 70%;
                        float: left;
                        margin-top: 10px;
                    }
                    .oneThird {
                        width: 30%;
                        float: left;
                        margin-top: 10px;
                    }
                    p {
                        width: 90%;
                    }
                    .text{
                        font-family: 'Encode Sans Expanded', sans-serif;
                        color: white;
                    }
                    .albumTitle {
                        text-align: center;
                    }
                    .callToAction {
                        width: 70%;
                        height: 30px;
                        background-color: #519ead;
                        margin: 10px 0 10px 0;
                    }
                `}</style>
            </div>
        );
    }
}
export default Albums;
