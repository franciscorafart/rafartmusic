import React, {Component} from 'react';
import YoutubeVideo from './YoutubeVideo'

class Videos extends Component {
    constructor(props){
        super(props)
    }

    render(){
        // NOTE: To change size of youtube videos, set both the .videoBox
        // and the YoutubeVideo props to the same width and height.

        return (
            <div className="container">
                <h2 className="text">Latest Videos</h2>
                <div className="videoBoxContainer">
                    {
                        this.props.videos.map(v => {
                            return <div className="videoBox">
                            <YoutubeVideo
                                video={v}
                                width={"560"}
                                height={"315"}
                            />
                            </div>
                        })
                    }
                </div>
                <style jsx>
                {`
                    .container {
                        background: black;
                    }
                    .videoBoxContainer{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        align-items: flex-start;
                        min-height: 800px;
                        margin: 80px 0 80px 0;
                    }
                    .videoBox {
                        width: 560px;
                        height: 315px;
                        margin-bottom: 40px;
                    }
                    .text {
                        font-family: 'Encode Sans Expanded', sans-serif;
                        font-size: 2em;
                        color: white;
                        text-align: center;
                    }
                `}</style>
            </div>
        )
    }
}

export default Videos;
