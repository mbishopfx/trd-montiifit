# Montana Tornatore - Montiifit Gallery Setup Guide

## Overview
This is a gallery-first website with Sanity.io CMS integration for Montana Tornatore's HYROX coaching business. The layout mixes photo cards with info/CTA cards for a unique, engaging experience.

## Features
- 🖼️ Gallery-first layout (not a traditional website)
- 📝 Sanity.io headless CMS for content management
- 🍔 Hamburger menu with social links and navigation
- 📱 Fully responsive design
- 🎨 Mixed photo + info cards throughout gallery
- ✨ Framer Motion animations
- ☁️ Cloudinary integration for photos/videos

## Setup Instructions

### 1. Install Dependencies
Already done! All packages are installed.

### 2. Configure Cloudinary

1. Sign up at [Cloudinary](https://cloudinary.com)
2. Get your Cloud Name, API Key, and API Secret
3. Update `.env.local`:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

### 3. Upload Montana's Photos to Cloudinary

The photos are in `/Users/matthewbishop/Downloads/Montiifit/`

**Upload via Cloudinary Dashboard:**
1. Go to your Cloudinary dashboard
2. Click "Media Library"
3. Upload all photos and videos from the Montiifit folder
4. Organize into folders: `training`, `competition`, `lifestyle`
5. Copy the public IDs or URLs to use in the gallery

**Or use Cloudinary CLI:**
```bash
npm install -g cloudinary-cli
cloudinary config
cloudinary upload_dir /Users/matthewbishop/Downloads/Montiifit/ montiifit/
```

### 4. Configure Sanity.io

1. Sign up at [Sanity.io](https://www.sanity.io)
2. Create a new project
3. Get your Project ID
4. Update `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   ```

### 5. Initialize Sanity Studio

```bash
cd /Users/matthewbishop/True\ Rank\ Digital/trd-montiifit-live/montiifit-app
npx sanity init --project-id YOUR_PROJECT_ID --dataset production
```

### 6. Deploy Sanity Schemas

```bash
npx sanity deploy
```

### 7. Access Sanity Studio

Once deployed, access the CMS at:
```
http://localhost:3000/studio
```

Here you can:
- Create blog posts
- Add/edit info cards
- Manage achievements
- Configure services

## Running the Development Server

```bash
cd /Users/matthewbishop/True\ Rank\ Digital/trd-montiifit-live/montiifit-app
npm run dev
```

Visit: http://localhost:3000

## Project Structure

```
montiifit-app/
├── app/
│   ├── page.tsx           # Main gallery page
│   ├── blog/              # Blog pages
│   └── studio/            # Sanity Studio
├── components/
│   ├── HamburgerMenu.tsx  # Top-right menu
│   ├── PhotoCard.tsx      # Photo cards for gallery
│   ├── InfoCard.tsx       # Info/CTA cards
│   └── (old components)   # Remove these later
├── sanity/
│   └── schemas/           # CMS content schemas
│       ├── blogPost.ts
│       ├── infoCard.ts
│       ├── achievement.ts
│       └── service.ts
├── lib/
│   └── sanity.ts          # Sanity client
└── .env.local             # Environment variables
```

## Updating Gallery Content

### Add Photos
1. Upload to Cloudinary
2. In `app/page.tsx`, add photo data to the `photos` array
3. Insert into `galleryItems` array at desired position

### Add Info Cards
In `app/page.tsx`, add to `galleryItems`:
```tsx
{
  type: 'info',
  id: 'unique-id',
  data: {
    title: 'Card Title',
    type: 'about', // or 'cta', 'stats', 'contact', 'achievement'
    content: 'Your content here',
    ctaText: 'Button Text',
    ctaLink: 'https://...',
  },
}
```

### Card Types
- `about`: Bio/about information
- `cta`: Call-to-action with prominent button
- `stats`: Numbers/achievements grid
- `contact`: Contact information and links
- `achievement`: Competition results
- `services`: Service offerings

## Customization

### Colors
Edit `app/globals.css` to change the color scheme:
- Primary: Red (#ef4444)
- Secondary: Orange (#f59e0b)

### Content
Edit in Sanity Studio at `/studio` or directly in `app/page.tsx`

### Social Links
Update in `components/HamburgerMenu.tsx`

## Deployment

### Vercel (Recommended)
```bash
vercel
```

Make sure to add environment variables in Vercel dashboard.

### Other Platforms
Build command: `npm run build`
Output directory: `.next`

## Next Steps

1. ✅ Upload all photos to Cloudinary
2. ✅ Configure Sanity.io project
3. ✅ Add content via Sanity Studio
4. ✅ Replace placeholder images with real Cloudinary URLs
5. ✅ Customize colors and styling
6. ✅ Deploy to Vercel

## Support

For questions or issues:
- Email: [your-email]
- Documentation: Check component files for inline comments

---

**Built with:** Next.js 15, Sanity.io, Cloudinary, Framer Motion, Tailwind CSS

