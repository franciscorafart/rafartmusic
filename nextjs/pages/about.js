import Container from "../src/Container";
import client from '../client';

const About = Container;

About.getInitialProps = async function(){
    const logo = await client.fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');
    const menu = await client.fetch('*[_type == "menu"]{title, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');
    return {
        logo: logo,
        menu: menu,
        page: 'about'
    }
};

export default About;