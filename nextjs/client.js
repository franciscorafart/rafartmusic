import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.PROJECTID,
    dataset: process.env.DATASET,
    useCdn: process.env.USECDN
})
