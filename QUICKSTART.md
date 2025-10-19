# ⚡ Quick Start Guide - Get Running in 5 Minutes

## Step 1: Start the Server (Already Running!)

The development server should already be running. If not:

```bash
cd "/Users/matthewbishop/True Rank Digital/trd-montiifit-live/montiifit-app"
npm run dev
```

**Visit**: http://localhost:3000

## Step 2: Configure Cloudinary (REQUIRED)

### Sign up for Cloudinary (Free)
1. Go to: https://cloudinary.com/users/register_free
2. Create account
3. Go to Dashboard → Copy credentials

### Update .env.local
```bash
# Edit this file
nano .env.local
```

Replace with your credentials:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
CLOUDINARY_API_KEY=your_actual_api_key
CLOUDINARY_API_SECRET=your_actual_api_secret
```

## Step 3: Upload Montana's Photos

### Option A: Via Cloudinary Dashboard (Easiest)
1. Go to: https://cloudinary.com/console/media_library
2. Click "Upload"
3. Select all files from:
   ```
   /Users/matthewbishop/Downloads/Montiifit/
   ```
4. Upload to folder: `montiifit`
5. Wait for upload to complete

### Option B: Via CLI (Faster for bulk)
```bash
# Install Cloudinary CLI
npm install -g cloudinary-cli

# Configure
cloudinary config

# Upload all photos
cloudinary upload_dir /Users/matthewbishop/Downloads/Montiifit/ montiifit/ --resource_type auto
```

## Step 4: Get Cloudinary URLs

After upload, get URLs from Cloudinary:
1. Go to Media Library
2. Click any image
3. Copy the URL (looks like):
   ```
   https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1234567/montiifit/filename.jpg
   ```

## Step 5: Add Photos to Gallery

Edit `app/page.tsx`:

```tsx
const photos = [
  { 
    id: 1, 
    src: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1234/montiifit/montiifit_3492014700441241750_59842297436_2024-11-01.jpg',
    alt: 'Training Session',
    caption: 'Morning Workout',
    date: '2024-11-01'
  },
  // Add more photos...
];
```

## Step 6: Configure Sanity.io (OPTIONAL - For CMS)

### Create Sanity Project
1. Go to: https://www.sanity.io/manage
2. Create new project
3. Copy Project ID

### Update .env.local
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Initialize Sanity
```bash
cd "/Users/matthewbishop/True Rank Digital/trd-montiifit-live/montiifit-app"
npx sanity init --project-id YOUR_PROJECT_ID --dataset production
npx sanity deploy
```

### Access CMS
Visit: http://localhost:3000/studio

## What You'll See

### Main Page (http://localhost:3000)
- ✅ Minimal hero with Montana's name and tagline
- ✅ Gallery grid with mixed photo/info cards
- ✅ Hamburger menu (top-right) with navigation
- ✅ Smooth animations
- ✅ Responsive design

### Hamburger Menu (Click top-right)
- Navigation links (Gallery, Blog, About, Contact)
- Social media links (Instagram, Linktree, Email)
- CTA for coaching
- Discount codes

### Blog Page (http://localhost:3000/blog)
- List of blog posts
- Ready for Sanity integration

### Studio (http://localhost:3000/studio)
- Content management system
- Create/edit blog posts, cards, achievements

## Customize Content

### Update Montana's Bio
Edit `app/page.tsx` around line 40:
```tsx
{
  type: 'info',
  id: 'about-1',
  data: {
    title: 'Montana Tornatore',
    type: 'about',
    content: 'Your custom bio here...',
  },
}
```

### Update Social Links
Edit `components/HamburgerMenu.tsx` around line 8:
```tsx
const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/YOUR_HANDLE', icon: '📷' },
  // Add/edit links...
];
```

### Change Colors
Edit `app/globals.css` around line 3:
```css
:root {
  --primary: #ef4444;      /* Red - change this */
  --accent: #f59e0b;       /* Orange - change this */
}
```

## Gallery Layout Pattern

The gallery alternates between photos and info cards:

```
Row 1: [Photo] [Photo] [Photo]
Row 2: [Photo] [Info Card - About] [Photo]
Row 3: [Info Card - Stats] [Photo] [Photo]
Row 4: [Photo] [Photo] [Info Card - CTA]
Row 5: [Info Card - Achievement] [Photo] [Photo]
... continues ...
```

## Info Card Types

1. **About**: Bio and introduction
2. **CTA**: Call-to-action for coaching (prominent styling)
3. **Stats**: Achievement numbers in grid
4. **Contact**: Social links and email
5. **Achievement**: Competition results
6. **Services**: Coaching packages

## Testing Checklist

- [ ] Server running at http://localhost:3000
- [ ] Hamburger menu opens/closes
- [ ] Photo cards visible
- [ ] Info cards visible
- [ ] Mobile responsive (check on phone)
- [ ] Blog page loads
- [ ] All links work
- [ ] Smooth animations

## Common Issues

### "Cannot find module" errors
```bash
npm install
```

### Photos not showing
- Check Cloudinary cloud name in `.env.local`
- Verify photo URLs are correct
- Check image paths in `app/page.tsx`

### Styling looks broken
```bash
# Restart server
# Kill with Ctrl+C then:
npm run dev
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

## Next Steps

1. ✅ Upload all 100+ photos to Cloudinary
2. ✅ Replace placeholder photo URLs with real ones
3. ✅ Customize content in info cards
4. ✅ Update social links
5. ✅ Test on mobile device
6. ✅ Deploy to Vercel

## Deployment (When Ready)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, add environment variables
```

## Getting Help

- **Setup Issues**: See `SETUP.md`
- **Full Documentation**: See `README.md`
- **Component Code**: Check files in `components/`
- **Sanity Help**: https://www.sanity.io/docs
- **Cloudinary Help**: https://cloudinary.com/documentation

---

**You're all set!** 🎉

The gallery-first website is running at http://localhost:3000

Start by uploading photos to Cloudinary, then update the photo URLs in `app/page.tsx`.

