import {defineField, defineType} from 'sanity'
import * as FaIcons from 'react-icons/fa'

export default defineType({
  name: 'fidasContentPage',
  title: 'FIDAS Content', 
  type: 'document',
  fields: [
    defineField({
      name: 'trustedByTitle',
      title: 'Trusted By Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'trustedCompanies',
      title: 'Trusted Companies',
      type: 'array',
      of: [{
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            validation: Rule => Rule.required()
          }
        ]
      }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'expertiseTitle',
      title: 'Expertise Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required()},
          {name: 'description', type: 'text', title: 'Description', validation: Rule => Rule.required()}
        ]
      }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'testimonial',
      title: 'Featured Testimonial',
      type: 'object',
      fields: [
        {name: 'quote', type: 'text', title: 'Quote', validation: Rule => Rule.required()},
        {name: 'name', type: 'string', title: 'Author Name', validation: Rule => Rule.required()},
        {name: 'position', type: 'string', title: 'Position', validation: Rule => Rule.required()},
        {name: 'company', type: 'string', title: 'Company', validation: Rule => Rule.required()}
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'whyChooseFidas',
      title: 'Why Choose FIDAS Section',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required()},
          {name: 'description', type: 'text', title: 'Description', validation: Rule => Rule.required()}
        ]
      }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'industryVerticalsTitle',
      title: 'Industry Verticals Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'industryVerticals',
      title: 'Industry Verticals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Name', validation: Rule => Rule.required()},
          {name: 'description', type: 'string', title: 'Description', validation: Rule => Rule.required()},
          {name: 'icon', type: 'string', title: 'Icon', validation: Rule => Rule.required()}
        ]
      }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'industryVerticalsIframeSrc',
      title: 'Industry Verticals Iframe Source',
      type: 'url'
    }),
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      validation: Rule => Rule.required()
    })
  ]
})