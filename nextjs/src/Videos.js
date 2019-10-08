import React, {Component} from 'react';
import YoutubeVideo from './YoutubeVideo'

class Videos extends Component {
    constructor(props){
        super(props)
        this.state = {
            smallVideo: false,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({smallVideo: window.innerWidth <= 750});
    }

    render(){
        // NOTE: To change size of youtube videos, set both the .videoBox
        // and the YoutubeVideo props to the same width and height.
        const width = this.state.smallVideo? "355": "560";
        const height = this.state.smallVideo? "200": "315";

        return (
            <div className="container">
                <h2 className="text">Latest Videos</h2>
                <div className="videoBoxContainer">
                    {
                        this.props.videos.map(v => {
                            return <div key={v.slug} className="videoBox">
                            <YoutubeVideo
                                video={v}
                                width={width}
                                height={height}
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
                        margin: 80px 0 80px 0;
                    }
                    .videoBox {
                        margin-bottom: 40px;
                    }
                    .text {
                        font-family: 'Encode Sans Expanded', sans-serif;
                        font-size: 2em;
                        color: white;
                        text-align: center;
                    }
                    @media all and (max-width: 750px) {
                        .videoBoxContainer {
                            margin: 40px 0 40px 0;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Videos;
