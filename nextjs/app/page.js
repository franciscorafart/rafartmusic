import Posts from './components/Posts';
import Videos from './components/Videos';
import client from '../client';
import { urlFor } from './utils';

const Home = async (props) => {
    const posts = await client.fetch('*[_type == "post"]{title, slug, mainImage, publishedAt, paragraph, link, visible}');
    const videos = await client.fetch('*[_type == "videos"]{link, title, slug, artist, description, title}');

    return (
        <div>
            <h3 className="text text-cover">Latest News</h3>
            <Posts urlFor={urlFor} posts={posts} onlyLatest={true}/>
            <h3 className="text text-cover">Latest Videos</h3>
            <Videos videos={videos} />
        </div>
    ) 
}

export default Home;