import YoutubeVideo from './YoutubeVideo';
import { isMobile } from "../utils";
import { headers } from "next/headers";

import './Videos.css';

const Videos = async ({ videos }) => {
    const hds = await headers()
    const userAgent = hds.get("user-agent") || "";
    const mobile = isMobile(userAgent)
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
