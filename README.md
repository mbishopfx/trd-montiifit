# 🏃‍♀️ Montiifit - Montana Tornatore Portfolio

A unique gallery-first website for HYROX Pro athlete and fitness coach Montana Tornatore. Built with Next.js 15, Sanity.io CMS, Cloudinary, and Framer Motion.

## 🌟 Features

### Gallery-First Design
- **Not a traditional website** - Photo gallery with mixed info/CTA cards
- Inspired by Pinterest/Instagram aesthetic
- Seamless blend of photos, achievements, and calls-to-action
- Infinite scroll gallery experience

### Content Management
- **Sanity.io Headless CMS** for easy content updates
- Blog post management
- Dynamic info cards
- Achievement tracking
- Service offerings

### User Experience
- 🍔 **Hamburger menu** (top-right) with:
  - Navigation links
  - Social media connections
  - Contact information
  - Exclusive discount codes
- 📱 Fully responsive on all devices
- ✨ Smooth Framer Motion animations
- 🎨 Dark theme with red/orange accents

### Media Management
- ☁️ Cloudinary integration for photos and videos
- Optimized image delivery
- Support for 100+ training/competition photos
- Video playback in gallery

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd /Users/matthewbishop/True\ Rank\ Digital/trd-montiifit-live/montiifit-app
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Sanity.io
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### 3. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### 4. Access Sanity Studio (CMS)
Visit: http://localhost:3000/studio

## 📁 Project Structure

```
montiifit-app/
├── app/
│   ├── page.tsx              # Main gallery page
│   ├── blog/
│   │   └── page.tsx          # Blog listing
│   ├── studio/
│   │   └── [[...index]]/
│   │       └── page.tsx      # Sanity Studio
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── HamburgerMenu.tsx     # Top-right navigation menu
│   ├── PhotoCard.tsx         # Photo gallery cards
│   ├── InfoCard.tsx          # Info/CTA cards
│   ├── About.tsx             # Legacy component
│   ├── CTA.tsx               # Legacy component
│   ├── Gallery.tsx           # Legacy component
│   ├── Hero.tsx              # Legacy component
│   ├── Navigation.tsx        # Legacy component
│   └── Services.tsx          # Legacy component
├── sanity/
│   ├── schemas/
│   │   ├── index.ts          # Schema exports
│   │   ├── blogPost.ts       # Blog post schema
│   │   ├── infoCard.ts       # Info card schema
│   │   ├── achievement.ts    # Achievement schema
│   │   └── service.ts        # Service schema
│   └── sanity.config.ts      # Sanity configuration
├── lib/
│   └── sanity.ts             # Sanity client setup
├── public/
│   └── placeholder.jpg       # Placeholder images
├── .env.local                # Environment variables (create this)
├── .env.example              # Environment template
├── SETUP.md                  # Detailed setup guide
└── package.json              # Dependencies
```

## 🎨 Gallery Layout

The gallery uses a 3-column grid on desktop (responsive on mobile) that alternates between:

### Photo Cards
- Display training/competition photos from Cloudinary
- Hover effects reveal captions
- Click to view full size (future feature)
- Support for both images and videos

### Info Cards
Different types serve different purposes:

**1. About Card** (`type: 'about'`)
- Bio and introduction
- Background information
- Credentials

**2. CTA Card** (`type: 'cta'`)
- Call-to-action for coaching
- Prominent button
- Urgency messaging

**3. Stats Card** (`type: 'stats'`)
- Competition statistics
- Achievement numbers
- Visual metrics

**4. Achievement Card** (`type: 'achievement'`)
- Individual competition results
- Best times
- Event details

**5. Contact Card** (`type: 'contact'`)
- Social media links
- Email contact
- Booking information

**6. Services Card** (`type: 'services'`)
- Coaching offerings
- Pricing information
- Package details

## 🖼️ Adding Content

### Adding Photos to Gallery

1. **Upload to Cloudinary**
   - Login to Cloudinary dashboard
   - Upload photos/videos from `/Users/matthewbishop/Downloads/Montiifit/`
   - Organize into folders: `training`, `competition`, `lifestyle`

2. **Add to Gallery**
   Edit `app/page.tsx`:
   ```tsx
   const photos = [
     { 
       id: 1, 
       src: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1234/montiifit/photo.jpg',
       alt: 'Training Session',
       caption: 'Morning Workout',
       date: '2025-10-15'
     },
   ];
   ```

### Adding Info Cards

Edit `app/page.tsx` in the `galleryItems` array:

```tsx
{
  type: 'info',
  id: 'unique-card-id',
  data: {
    title: 'Card Title',
    type: 'cta', // or 'about', 'stats', 'contact', 'achievement'
    content: 'Your content here...',
    ctaText: 'Button Text',
    ctaLink: 'https://example.com',
  },
}
```

### Managing Content via Sanity Studio

1. Visit http://localhost:3000/studio
2. Create/edit:
   - **Blog Posts**: Training articles and tips
   - **Info Cards**: Dynamically managed cards
   - **Achievements**: Competition results
   - **Services**: Coaching packages

## 🎯 Key Pages

### Main Gallery (`/`)
- Gallery-first layout
- Mixed photo + info cards
- Minimal hero section
- Continuous scroll experience

### Blog (`/blog`)
- Training articles
- Competition insights
- Fitness tips
- HYROX strategies

### Studio (`/studio`)
- Content management system
- Edit all website content
- Manage media
- Preview changes

## 🎨 Customization

### Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #ef4444;      /* Red */
  --secondary: #1e293b;    /* Dark slate */
  --accent: #f59e0b;       /* Orange */
}
```

### Social Links
Edit `components/HamburgerMenu.tsx`:
```tsx
const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/montanatornatore', icon: '📷' },
  // Add more...
];
```

### Navigation
Edit `components/HamburgerMenu.tsx`:
```tsx
const navLinks = [
  { name: 'Gallery', href: '/' },
  { name: 'Blog', href: '/blog' },
  // Add more...
];
```

## 📱 Mobile Responsive

- Hamburger menu for navigation
- Single-column gallery on mobile
- Touch-optimized interactions
- Swipe gestures supported

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: Sanity.io
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Media**: Cloudinary
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

```bash
vercel
```

### Environment Variables for Production

Add these in Vercel dashboard:
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`

## 📊 Montana's Info

### Statistics
- **Best Time**: 1:16:55 (Boston S8 Pro Doubles Women)
- **Total Competitions**: 8+
- **Years Competing**: 2023-2025
- **Performance Improvement**: 23%
- **Division**: Pro

### Services
1. **1:1 Online Coaching** - $400/month
2. **Competition Prep** - $1,500 (8 weeks)
3. **Digital Training Guide** - $127

### Social Links
- **Instagram**: [@montanatornatore](https://instagram.com/montanatornatore)
- **Linktree**: [linktr.ee/montanatornatore](https://linktr.ee/montanatornatore)
- **Email**: coaching@montanatornatore.com

### Discount Codes
- **HYROX Registration**: `MONTANA-10` (10% off)
- **Oner Active Gear**: $10 OFF

## 🐛 Troubleshooting

### Images not loading
- Check Cloudinary configuration in `.env.local`
- Verify cloud name is correct
- Ensure URLs are properly formatted

### Sanity Studio not loading
- Check project ID in `.env.local`
- Verify dataset name (usually 'production')
- Check API token permissions

### Build errors
- Run `npm install` to ensure dependencies
- Check TypeScript errors: `npm run build`
- Clear `.next` cache: `rm -rf .next`

## 📝 Content from Montana's Profile

All content is sourced from `/Users/matthewbishop/True Rank Digital/trd-montiifit-live/montana-tornatore-2025-10-19/`:
- ✅ Competition history
- ✅ Achievement data
- ✅ Services and pricing
- ✅ Hero copy
- ✅ About content
- ✅ CTA messaging

## 🎯 Next Steps

1. ✅ Upload all 100+ photos to Cloudinary
2. ✅ Configure Sanity.io project  
3. ✅ Add real photo URLs to gallery
4. ✅ Create initial blog posts
5. ✅ Customize social links
6. ✅ Deploy to Vercel
7. ✅ Connect custom domain

## 📞 Support

For questions or issues with this project:
- Review `SETUP.md` for detailed instructions
- Check component files for inline documentation
- Sanity.io docs: https://www.sanity.io/docs
- Cloudinary docs: https://cloudinary.com/documentation

---

**Built by**: True Rank Digital  
**For**: Montana Tornatore  
**Date**: October 2025  
**Tech**: Next.js 15, Sanity.io, Cloudinary, Framer Motion
# trd-montiifit
