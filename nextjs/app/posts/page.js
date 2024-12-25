import Posts from '../components/Posts';
import client from '../../client';
import { urlFor } from '../utils';

const Home = async () => {
    const posts = await client.fetch('*[_type == "post"]{title, slug, mainImage, publishedAt, paragraph, link, visible}');
    return (
        <div>
            <h1 className="text">News</h1>
            <Posts urlFor={urlFor} posts={posts} onlyLatest={false}/>
        </div>
    ) 
}

export default Home;