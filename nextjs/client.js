import sanityClient from '@sanity/client'

// TODO: Set them as env variables, hide them and deploy
export default sanityClient({
    projectId: process.env.PROJECTID,
    dataset: process.env.DATASET,
    useCdn: process.env.USECDN
})
