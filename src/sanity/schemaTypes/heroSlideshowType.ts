import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSlideshow',
  title: 'Hero Slideshow',
  type: 'document',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'imageUrl',
              title: 'Image URL',
              type: 'url',
              description: 'Use this if you want to provide an external image URL instead of uploading an image',
            },
          ],
        },
      ],
    }),
  ],
})