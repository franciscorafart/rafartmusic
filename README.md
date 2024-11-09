# Portfolio 
Static website with Next JS, React, Sanity.io and Netlify Check it out at: https://www.rafartmusic.com

## Description 
Static website for my personal portfolio created with React, NextJS for static site building and server side rendering, Sanity.io headless CMS for content resources, and Netlify for automatic deployment.

This project is two apps in one. The /rafartmusic folder has the Sanity schemas and resources to build the headless CMS. The React/NextJS front end portion is in the /nextjs folder. Both apps have to be deployed separately.

Netlify is hooked to track changes on any of the two apps code, rebuilding the static resources for the site whenever code is pushed to the repository. Also, Netlify is hooked to Sanity via a webhook. It will rebuild when any content is changed or updated in the Sanity deployed CMS.

## How to build?

Step 1 - Create Sanity application (headless CMS)

Run $npm install on root folder.
Create a Sanity application in Sanity.io Follow documentation install for detailed explanation https://www.sanity.io/docs/introduction/getting-started
Write in your sanity app credentials in sanity.json
Modify the schemas in this project to suit your website's needs
Execute with $npm run start
Deploy CMS with $sanity deploy
Upload content to your deployed content management system

Step 2. Build site with Next JS and React
a. Run $npm install on nextjs folder. Follow Next JS documentation for detailed explanation https://nextjs.org/learn/ 
b. Modify client.js file for sanity configs in next.js

    export default sanityClient({
        projectId: 'your-project-id',
        dataset: 'your-dataset',
        useCdn: true
    })

If using environmental variables from an .env file for these credentials, make sure to setup the nextjs.config.js
so that it can handle .env variables (use dotenv package). Setup your environmental variables in your Netlify
environment.

- nextjs.config.js example to use a .env file
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
}

c. Style with Nextjs incorporated <style jsx> tag. Global styles with <style jsx global>

d. Create /out folder in your root and add command to build and export in your package.json file. We need 'next build' and 'next export' in one command because Netlify will use this to build and deploy our website.

"scripts": {
    "build": "next build && next export"
}

Step 3: Deploy with Netlify
Setup:
a. Login to Netlify with Github.
b. Create a new deploy in Netlify and connect it to your github repository

c. Make sure your netlify.toml file on your root folder is set up correctly.

[build] base = "front-end" //root directory of your application
publish = "front-end/out" // your build directory. Where your static assets will go.
command = "npm run build" // the command to build and export the static site

d. Setup a webhook for receiving build request, Netlify should build every time you push to github
e. Setup outgoing webhook in Sanity.io, so that Netlify builds every time content changes in Sanity.io

Step 3. Mailchimp newsletter subscription
Import form html from mailchimp dashboard. Adapt html to jsx syntax.


# Commands
$ npm run dev  // Run netlify site locally on /nextjs folder
$ npm run start // Run Sanity locally on /rafartmusic folder
$ sanity deploy // Deploy assets and schemas to Sanity CMS
