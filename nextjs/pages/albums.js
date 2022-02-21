import Container from "../src/Container";
import client from '../client';

const Albums = Container;

Albums.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
    const albums = await client.fetch('*[_type == "albums"]{title, name, slug, releaseType, year, paragraph, cover, spotify, bandcamp, soundcloud, nft}');
    const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, headerMenu, socialMedia, iconClass}');
    const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

    return {
        logo: logo,
        coverImage: coverImage,
        albums: albums,
        menu: menu,
        favicon: favicon,
        page: 'albums'
    };
};

export default Albums;
