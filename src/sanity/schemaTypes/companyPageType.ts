import {defineField, defineType} from 'sanity'
import * as FaIcons from 'react-icons/fa'

export const companyPageType = defineType({
  name: 'companyPage',
  title: 'Company Page',
  type: 'document',
  fields: [
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'routineWorksImage',
      title: 'Routine Works Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'companyValues',
      title: 'Company Values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            type: 'string',
            title: 'Icon',
            validation: (Rule) => Rule.required(),
            options: {
              list: Object.keys(FaIcons).map(icon => ({title: icon, value: icon}))
            }
          },
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'description', type: 'text', title: 'Description'},
        ],
      }],
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sapIntegration',
      title: 'SAP Integration Experience',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'futureIntegration',
      title: 'Future-Ready Integration',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'description', type: 'text', title: 'Description'},
      ],
    }),
    defineField({
      name: 'whyChooseVentura',
      title: 'Why Choose Ventura Automation?',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'fidasBenefits',
      title: 'FIDAS Benefits',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
