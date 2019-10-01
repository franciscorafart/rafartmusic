import Container from "../src/Container";
import client from "../client";

const Index = Container;

Index.getInitialProps = async function() {
  const albums = await client.fetch('*[_type == "albums"]{title, name, releaseType, description, cover, spotify, soundcloud}');
  const coverImage = await client.fetch('*[_type == "generalAssets" && slug.current == "cover-img"][0]{title, mainImage}');
  const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
  const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, icon, headerMenu, mainMenu, socialMedia}');
  // const social_media = await client.fetch('*[_type == "social_footer"]')
  // const skillResources = await client.fetch('*[_type == "skills"][0]{title, languages, frameworks, databases}')
  // const liImgData = await client.fetch('*[_type == "images" && slug.current == "skills-rectangle"][0]{title, name, poster}')
  // const apps = await client.fetch('*[_type == "apps"]')
  // const appBackground = await client.fetch('*[_type == "images" && slug.current == "responsive-corners"][0]{poster}')
  // const contacts = await client.fetch('*[_type == "social_media"]')
  // const otherProjects = await client.fetch('*[_type == "otherProjects"]')
  // const data = await res.json()


  return {
    albums: albums,
    coverImage: coverImage,
    menu: menu,
    logo: logo,
    // social_media: social_media,
    // skillResources: skillResources,
    // liImgData: liImgData,
    // appBackground: appBackground,
    // apps: apps,
    // contacts: contacts,
    // otherProjects: otherProjects,
    };
};

export default Index;
