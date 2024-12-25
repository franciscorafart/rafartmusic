import Posts from './components/Posts';
import client from '../client';
import { urlFor } from './utils';

const Home = async () => {
    const posts = await client.fetch('*[_type == "post"]{title, slug, mainImage, publishedAt, paragraph, link, visible}');
    const videos = await client.fetch('*[_type == "videos"]{link, title, slug, artist, description, title}');
    return (

        <div>
            <h3 className="text">Latest News</h3>
            <Posts urlFor={urlFor} posts={posts} onlyLatest={true}/>
            <h3 className="text">Latest Videos</h3>
            {/* <Videos videos={props.videos}/> */}
        </div>
    ) 
}

export default Home;