import Container from "../src/Container";
import client from '../client';

const Press = Container;

Press.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const albums = await client.fetch('*[_type == "albums"]{title, name, releaseType, description, cover, spotify, soundcloud}');
    const menu = await client.fetch('*[_type == "menu"]{title, slug, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');
    return {
        logo: logo,
        albums: albums,
        menu: menu,
        page: 'press'
    }
};

export default Press;
