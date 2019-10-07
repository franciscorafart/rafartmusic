import sanityClient from '@sanity/client'
console.log('process.env.PROJECTID',process.env.PROJECTID)
export default sanityClient({
    projectId: process.env.PROJECTID,
    dataset: process.env.DATASET,
    useCdn: process.env.USECDN
})
