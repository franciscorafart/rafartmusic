import Container from "../../src/Container";
import client from '../../client';

const Blog = Container;

Blog.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
    const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, headerMenu, socialMedia, iconClass}');
    const articles = await client.fetch('*[_type == "content"]{name, slug, image, paragraph}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');
    
    return {
        logo: logo,
        coverImage: coverImage,
        menu: menu,
        favicon: favicon,
        articles: articles,
        page: 'blog'
    };
};

export default Blog;
