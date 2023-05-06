export default {
    name: 'catalogue',
    title: 'Catalogue',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
          name: 'caregory',
          title: 'Category',
          type: 'string'
      },
      {
          name: 'year',
          title: 'Year',
          type: 'string'
      },
      {
        name: 'release',
        title: 'Release',
        type: 'string'
    },
      {
          name: 'slug',
          title: 'Slug',
          type: 'string'
      },
      {
        name: 'paragraph',
        title: 'Description',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: []
          }
        ]
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
          name: 'link1',
          title: 'Link1',
          type: 'url'
      },
      {
          name: 'link2',
          title: 'Link2',
          type: 'url'
      },
      {
          name: 'link3',
          title: 'Link3',
          type: 'url'
      },
    ]
  }
  