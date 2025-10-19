import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'event',
      title: 'Event',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partner',
      title: 'Partner',
      type: 'string',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight (Best Time)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'event',
      subtitle: 'time',
      year: 'year',
    },
    prepare({ title, subtitle, year }) {
      return {
        title: `${year} - ${title}`,
        subtitle: subtitle,
      };
    },
  },
});

