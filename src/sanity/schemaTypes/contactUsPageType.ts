import {defineField, defineType} from 'sanity'

export const contactUsPageType = defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'mapUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Paste the Google Maps embed URL here',
    }),
  ],
})
