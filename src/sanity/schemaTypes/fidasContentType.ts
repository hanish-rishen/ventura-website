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
    // Add the About Fidas section
    defineField({
      name: 'aboutFidas',
      title: 'About FIDAS',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        // Change videoUrl from URL to video upload
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          options: {
            accept: 'video/*'
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'points',
          title: 'About Fidas Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'pointTitle', title: 'Point Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' }
              ]
            }
          ],
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'twentyReasons',
      title: '20 Reasons Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'reasons',
          title: 'Reasons',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'points',
                title: 'Points',
                type: 'array',
                of: [{ type: 'string' }],
                validation: Rule => Rule.required()
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }
                ],
                validation: Rule => Rule.required()
              }
            ]
          }],
          validation: Rule => Rule.required().length(4) // Exactly 4 reason categories
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'optimizeSection',
      title: 'Optimize Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          validation: Rule => Rule.required()
        },
        {
          name: 'features',
          title: 'Optimization Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'image',
                title: 'Feature Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }
                ],
                validation: Rule => Rule.required()
              }
            ]
          }],
          validation: Rule => Rule.required().length(4) // Exactly 4 features
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'learnSection',
      title: 'Learn How FIDAS Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'image',
          title: 'Process Image',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        },
        {
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [{
            type: 'string'
          }],
          validation: Rule => Rule.required().min(1)
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'expertiseTitle',
      title: 'Expertise Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'interfaceSection',
      title: 'Interface Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'devices',
          title: 'Electronic Devices',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Device Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'image',
                title: 'Device Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }
                ],
                validation: Rule => Rule.required()
              },
              {
                name: 'link',
                title: 'Product Link',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }],
          validation: Rule => Rule.required().min(1)
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'softwareProducts',
      title: 'Associated Software Products',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'products',
          title: 'Software Products',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Product Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'image',
                title: 'Product Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }
                ],
                validation: Rule => Rule.required()
              },
              {
                name: 'link',
                title: 'Product Link',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }],
          validation: Rule => Rule.required().min(1)
        }
      ],
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

    // Add this new field for Customer List section
    defineField({
      name: 'customerList',
      title: 'Customer List Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'customers',
          title: 'Customers',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Customer Name',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'logo',
                title: 'Customer Logo',
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                  }
                ],
                validation: Rule => Rule.required()
              }
            ]
          }],
          validation: Rule => Rule.required().min(1)
        }
      ],
      validation: Rule => Rule.required()
    })
  ]
})