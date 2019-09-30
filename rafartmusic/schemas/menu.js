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
        name: 'icon',
        title: 'Icon',
        type: 'image'
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
    }
  ]
}
