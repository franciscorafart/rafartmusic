import React, {Component} from 'react';

class YoutubeVideo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <div>
                <h3 className="text">{this.props.video.title}</h3>
                <h4 className="text">{this.props.video.artist}</h4>
                <iframe
                    width={this.props.width}
                    height={this.props.height}
                    src={this.props.video.link}
                    frameBorder="0"
                    allow="accelerometer;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <style jsx>{`
                .text {
                    font-family: 'Encode Sans Expanded', sans-serif;
                    color: white;
                    text-align: center;
                }

            `}</style>
        </div>
    }
}

export default YoutubeVideo;
