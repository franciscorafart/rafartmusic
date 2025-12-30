import Posts from '../components/Posts';
import { urlFor } from '../utils';
import { posts } from '../homeContent';

const Home = async () => {
    return (
        <div>
            <h1 className="text">News</h1>
            <Posts urlFor={urlFor} posts={posts} onlyLatest={false}/>
        </div>
    ); 
};

export default Home;