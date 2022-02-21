export default {
    name: 'videos',
    title: 'Videos',
    type: 'document',
    fields: [
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
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
            name: 'artist',
            title: 'Artist',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image'
        },
    ]
}
