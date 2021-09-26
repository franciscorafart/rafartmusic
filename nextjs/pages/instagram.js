import Container from "../src/Container";
import client from '../client';

const FastLinks = Container;

FastLinks.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
    const menu = await client.fetch('*[_type == "menu"]{title, slug, order, linkString, headerMenu, socialMedia, iconClass}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');
    
    // TODO: Add link from Sanity

    return {
        logo: logo,
        menu: menu,
        coverImage: coverImage,
        favicon: favicon,
        page: 'instagram'
    };
};

export default FastLinks;
