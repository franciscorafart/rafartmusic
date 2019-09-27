export default {
    name: 'video',
    title: 'Video',
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
        }
    ]
}
