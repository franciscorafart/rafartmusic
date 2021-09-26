import React, {useEffect, useState} from 'react';
import YoutubeVideo from './YoutubeVideo'

const Videos = (props = {}) => {
    const [smallVideo, setSmallVideo] = useState(false);

    const resize = () => {
        setSmallVideo(window.innerWidth <= 750);
    }

    useEffect(() => {
        window.addEventListener("resize", resize);

        return () => {
            return window.removeEventListener("resize", resize);
        }
    }, []);

    // NOTE: To change size of youtube videos, set both the .videoBox
    // and the YoutubeVideo props to the same width and height.
    const width = smallVideo? "355": "560";
    const height = smallVideo? "200": "315";

    // TODO: Sort videos by date
    return (
        <div className="container">
            <div className="videoBoxContainer">
                {
                    props.videos && props.videos.map(v => {
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

export default Videos;
