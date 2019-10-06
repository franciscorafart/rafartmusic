export default {
  name: 'albums',
  title: 'Albums',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
        name: 'releaseType',
        title: 'Type of release',
        type: 'string'
    },
    {
        name: 'year',
        title: 'Year',
        type: 'string'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
        name: 'cover',
        title: 'Cover',
        type: 'image'
    },
    {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image'
    },
    {
        name: 'spotify',
        title: 'Spotify',
        type: 'url'
    },
    {
        name: 'bandcamp',
        title: 'Bandcamp',
        type: 'url'
    },
    {
        name: 'soundcloud',
        title: 'Soundcloud',
        type: 'url'
    }
  ]
}
