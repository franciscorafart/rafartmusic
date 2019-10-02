import Container from "../src/Container";
import client from "../client";

const Index = Container;

Index.getInitialProps = async function() {
  const albums = await client.fetch('*[_type == "albums"]{title, name, releaseType, description, cover, spotify, soundcloud}');
  const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
  const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
  const menuBackground = await client.fetch('*[_type == "generalAssets" && slug.current == "menu-background"][0]{title, mainImage}');
  const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');
  // const contacts = await client.fetch('*[_type == "social_media"]')



  return {
    albums: albums,
    coverImage: coverImage,
    menu: menu,
    logo: logo,
    menuBackground: menuBackground,
    // contacts: contacts,
    };
};

export default Index;
