import Container from "../src/Container";
import client from '../client';

const About = Container;

About.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
    const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, headerMenu, socialMedia, iconClass}');
    const about = await client.fetch('*[_type == "content" && slug.current == "about"][0]{name, slug, image, paragraph}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

    return {
        logo: logo,
        coverImage: coverImage,
        menu: menu,
        favicon: favicon,
        about: about,
        page: 'about'
    };
};

export default About;
