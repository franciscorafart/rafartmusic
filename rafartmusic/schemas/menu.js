export default {
  name: 'menu',
  title: 'Menu',
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
        type: 'string'
    },
    {
        name: 'order',
        title: 'Order',
        type: 'number'
    },
    {
        name: 'linkString',
        title: 'Link String',
        type: 'string'
    },
    {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image'
    },
    {
        name: 'iconClass',
        title: 'Icon Class',
        type: 'string'
    },
    {
        name: 'headerMenu',
        title: 'Header Menu',
        type: 'boolean'
    },
    {
        name: 'mainMenu',
        title: 'Main Menu',
        type: 'boolean'
    },
    {
        name: 'socialMedia',
        title: 'Social Media',
        type: 'boolean'
    }
  ]
}
