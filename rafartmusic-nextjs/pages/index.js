// import React from 'react'
// import Head from 'next/head'
// import Nav from '../components/nav'
//
// const Home = () => (
//   <div>
//     <Head>
//       <title>Home</title>
//     </Head>
//
//     <Nav />
//
//     <div className='hero'>
//       <h1 className='title'>Welcome to Next.js!</h1>
//       <p className='description'>
//         To get started, edit <code>pages/index.js</code> and save to reload.
//       </p>
//
//       <div className='row'>
//         <a href='https://nextjs.org/docs' className='card'>
//           <h3>Documentation &rarr;</h3>
//           <p>Learn more about Next.js in the documentation.</p>
//         </a>
//         <a href='https://nextjs.org/learn' className='card'>
//           <h3>Next.js Learn &rarr;</h3>
//           <p>Learn about Next.js by following an interactive tutorial!</p>
//         </a>
//         <a
//           href='https://github.com/zeit/next.js/tree/master/examples'
//           className='card'
//         >
//           <h3>Examples &rarr;</h3>
//           <p>Find other example boilerplates on the Next.js GitHub.</p>
//         </a>
//       </div>
//     </div>
//
//     <style jsx>{`
//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title,
//       .description {
//         text-align: center;
//       }
//       .row {
//         max-width: 880px;
//         margin: 80px auto 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }
//       .card {
//         padding: 18px 18px 24px;
//         width: 220px;
//         text-align: left;
//         text-decoration: none;
//         color: #434343;
//         border: 1px solid #9b9b9b;
//       }
//       .card:hover {
//         border-color: #067df7;
//       }
//       .card h3 {
//         margin: 0;
//         color: #067df7;
//         font-size: 18px;
//       }
//       .card p {
//         margin: 0;
//         padding: 12px 0 0;
//         font-size: 13px;
//         color: #333;
//       }
//     `}</style>
//   </div>
// )
//
// export default Home

import Container from '../src/Container'
import client from '../client'

const Index = Container

Index.getInitialProps = async function() {
  const resources = await client.fetch('*[_type == "bandBio" && slug.current == "francisco-rafart"][0]{title, name, profession, bio, image}')
  const header = await client.fetch('*[_type == "images" && slug.current == "header"][0]{title, poster}')
  const social_media = await client.fetch('*[_type == "social_footer"]')
  const skillResources = await client.fetch('*[_type == "skills"][0]{title, languages, frameworks, databases}')
  const liImgData = await client.fetch('*[_type == "images" && slug.current == "skills-rectangle"][0]{title, name, poster}')
  const apps = await client.fetch('*[_type == "apps"]')
  const appBackground = await client.fetch('*[_type == "images" && slug.current == "responsive-corners"][0]{poster}')
  const contacts = await client.fetch('*[_type == "social_media"]')
  const otherProjects = await client.fetch('*[_type == "otherProjects"]')
  // const data = await res.json()

  return {
    resources: resources,
    header: header,
    social_media: social_media,
    skillResources: skillResources,
    liImgData: liImgData,
    appBackground: appBackground,
    apps: apps,
    contacts: contacts,
    otherProjects: otherProjects,
  }
}

export default Index
