const YoutubeVideo = ({ video, width, height }) => {
    return <div>
        {video && height && width && <div>
            <h3 className="text">{video.title}</h3>
            <h4 className="text">{video.artist}</h4>
            <iframe
                width={width}
                height={height}
                src={video.link}
                frameBorder="0"
                allow="accelerometer;
                encrypted-media;
                gyroscope;
                picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>}
    </div>;
};

export default YoutubeVideo;
