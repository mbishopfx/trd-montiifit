import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'infoCard',
  title: 'Info Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardType',
      title: 'Card Type',
      type: 'string',
      options: {
        list: [
          { title: 'About/Bio', value: 'about' },
          { title: 'CTA/Coaching', value: 'cta' },
          { title: 'Services', value: 'services' },
          { title: 'Contact', value: 'contact' },
          { title: 'Stats', value: 'stats' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Dark Glass', value: 'glass-dark' },
          { title: 'Red Gradient', value: 'red-gradient' },
          { title: 'Orange Gradient', value: 'orange-gradient' },
          { title: 'Transparent', value: 'transparent' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this card appears in the gallery',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'cardType',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `${order || '?'}. ${title}`,
        subtitle: subtitle,
      };
    },
  },
});

