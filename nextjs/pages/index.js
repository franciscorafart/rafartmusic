import Container from '../src/Container'
import client from '../client'

const Index = Container

Index.getInitialProps = async function() {
  const albums = await client.fetch('*[_type == "albums"]{title, name, releaseType, description, cover, spotify, soundcloud}')
  // const header = await client.fetch('*[_type == "images" && slug.current == "header"][0]{title, poster}')
  // const social_media = await client.fetch('*[_type == "social_footer"]')
  // const skillResources = await client.fetch('*[_type == "skills"][0]{title, languages, frameworks, databases}')
  // const liImgData = await client.fetch('*[_type == "images" && slug.current == "skills-rectangle"][0]{title, name, poster}')
  // const apps = await client.fetch('*[_type == "apps"]')
  // const appBackground = await client.fetch('*[_type == "images" && slug.current == "responsive-corners"][0]{poster}')
  // const contacts = await client.fetch('*[_type == "social_media"]')
  // const otherProjects = await client.fetch('*[_type == "otherProjects"]')
  // const data = await res.json()
  console.log('albums', albums)
  return {
    albums: albums,
    // header: header,
    // social_media: social_media,
    // skillResources: skillResources,
    // liImgData: liImgData,
    // appBackground: appBackground,
    // apps: apps,
    // contacts: contacts,
    // otherProjects: otherProjects,
  }
}

export default Index
