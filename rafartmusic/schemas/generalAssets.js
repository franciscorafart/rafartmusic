export default {
    name: 'generalAssets',
    title: 'General Assets',
    type: 'document',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96
          }
        },
        {
          name: 'mainImage',
          title: 'Main image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'thumbnail',
          title: 'Thumbnail',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        }
    ]
}
