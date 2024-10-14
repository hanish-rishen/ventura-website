import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fidasContentPage',
  title: 'FIDAS Content Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
    }),
    defineField({
      name: 'automotiveTitle',
      title: 'Automotive Section Title',
      type: 'string',
    }),
    defineField({
      name: 'whatWeDoTitle',
      title: 'What We Do Title',
      type: 'string',
    }),
    defineField({
      name: 'whatWeDoDescription',
      title: 'What We Do Description',
      type: 'text',
    }),
    defineField({
      name: 'futureWithFidasTitle',
      title: 'Future with FIDAS Title',
      type: 'string',
    }),
    defineField({
      name: 'futureWithFidasPoints',
      title: 'Future with FIDAS Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'automotiveIframeSrc',
      title: 'Automotive Section Iframe Source',
      type: 'url',
    }),
    defineField({
      name: 'howItWorksTitle',
      title: 'How It Works Title',
      type: 'string',
    }),
    defineField({
      name: 'howItWorksSteps',
      title: 'How It Works Steps',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'howItWorksIframeSrc',
      title: 'How It Works Iframe Source',
      type: 'url',
    }),
    defineField({
      name: 'industryVerticalsTitle',
      title: 'Industry Verticals Title',
      type: 'string',
    }),
    defineField({
      name: 'industryVerticals',
      title: 'Industry Verticals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Name'},
          {name: 'description', type: 'string', title: 'Description'},
          {name: 'icon', type: 'string', title: 'Icon'},
        ],
      }],
    }),
    defineField({
      name: 'industryVerticalsIframeSrc',
      title: 'Industry Verticals Iframe Source',
      type: 'url',
    }),
    defineField({
      name: 'businessElevationTitle',
      title: 'Business Elevation Title',
      type: 'string',
    }),
    defineField({
      name: 'businessElevationPoints',
      title: 'Business Elevation Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'integrationTitle',
      title: 'Integration Section Title',
      type: 'string',
    }),
    defineField({
      name: 'integrationSubtitle',
      title: 'Integration Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'integrationDescription',
      title: 'Integration Description',
      type: 'text',
    }),
    defineField({
      name: 'integrationApps',
      title: 'Integration Apps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'App Name'},
        ],
      }],
    }),
  ],
})
