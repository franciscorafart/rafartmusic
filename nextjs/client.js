import sanityClient from '@sanity/client'
console.log(process.env)
export default sanityClient({
    projectId: process.env.PROJECTID,
    dataset: process.env.DATASET,
    useCdn: process.env.USECDN
})
