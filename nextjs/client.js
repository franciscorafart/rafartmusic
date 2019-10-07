import sanityClient from '@sanity/client'

// TODO: Set them as env variables, hide them and deploy
export default sanityClient({
    projectId: process.env.projectId,
    dataset: process.env.dataset,
    useCdn: process.env.useCdn
})
