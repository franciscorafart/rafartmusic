import Container from "../src/Container";
import client from "../client";

const Posts = Container;

Posts.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const menu = await client.fetch('*[_type == "menu"]{title, slug, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');
    const posts = await client.fetch('*[_type == "post"]{title, slug, mainImage, publishedAt, paragraph, link, visible}');

    return {
        logo: logo,
        menu: menu,
        favicon: favicon,
        posts: posts,
        page: 'posts'
    }
}

export default Posts;
