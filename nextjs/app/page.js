import Posts from './components/Posts';
import Videos from './components/Videos';
import { urlFor } from './utils';
import { homePageVideos, posts } from './homeContent';

const Home = async () => {
    return (
        <div>
            <h3 className="text text-cover">Latest News</h3>
            <Posts urlFor={urlFor} posts={posts} onlyLatest={true}/>
            <h3 className="text text-cover">Latest Videos</h3>
            <Videos videos={homePageVideos} />
        </div>
    ); 
};

export default Home;