import Container from "../src/Container";
import client from '../client';

const Albums = Container;

Albums.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const albums = await client.fetch('*[_type == "albums"]{title, name, slug, releaseType, year, description, cover, spotify, bandcamp, soundcloud}');
    const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

    return {
        logo: logo,
        albums: albums,
        menu: menu,
        favicon: favicon,
        page: 'albums'
    }
};

export default Albums;
