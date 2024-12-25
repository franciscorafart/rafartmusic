import YoutubeVideo from './YoutubeVideo';
import './Videos.css';

const Videos = ({videos, mobile}) => {
    const smallVideo = mobile;

    // NOTE: To change size of youtube videos, set both the .videoBox
    // and the YoutubeVideo props to the same width and height.
    const width = smallVideo? "355": "560";
    const height = smallVideo? "200": "315";

    // TODO: Sort videos by date
    return (
        <div className="container">
            <div className="videoBoxContainer">
                {
                    videos && videos.map(v => {
                        return <div key={v.slug} className="videoBox">
                        <YoutubeVideo
                            video={v}
                            width={width}
                            height={height}
                        />
                        </div>;
                    })
                }
            </div>
        </div>
    );
};

export default Videos;
