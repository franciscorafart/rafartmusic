import React from 'react';

const YoutubeVideo = (props = {}) => {
    return <div>
        {props.video && props.height && props.width && <div>
            <h3 className="text">{props.video.title}</h3>
            <h4 className="text">{props.video.artist}</h4>
            <iframe
                width={props.width}
                height={props.height}
                src={props.video.link}
                frameBorder="0"
                allow="accelerometer;
                encrypted-media;
                gyroscope;
                picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>}
        <style jsx>{`
            .text {
                font-family: 'Encode Sans Expanded', sans-serif;
                color: white;
                text-align: center;
            }

        `}</style>
    </div>
}

export default YoutubeVideo;
