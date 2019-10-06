import Container from "../src/Container";
import client from "../client";

const Index = Container;

Index.getInitialProps = async function() {
  const albums = await client.fetch('*[_type == "albums"]{title, name, releaseType, description, cover, spotify, soundcloud}');
  const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
  const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
  const menuBackground = await client.fetch('*[_type == "generalAssets" && slug.current == "menu-background"][0]{title, mainImage}');
  const menu = await client.fetch('*[_type == "menu"]{title, slug, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');
  const videos = await client.fetch('*[_type == "videos"]{link, title, artist, description, title}');
  const favicon = await client.fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

  return {
    albums: albums,
    coverImage: coverImage,
    menu: menu,
    logo: logo,
    menuBackground: menuBackground,
    videos: videos,
    favicon: favicon,
    page: 'home',
    };
};

export default Index;
