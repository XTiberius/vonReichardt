# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages at **https://www.vonreichardt.com/**

## Setup Instructions

### 1. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Configure Custom Domain

1. In the same **Pages** settings page, under **Custom domain**, enter: `www.vonreichardt.com`
2. Check **Enforce HTTPS** (recommended)

### 3. DNS Configuration

Configure your DNS records with your domain provider:

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `YOUR_USERNAME.github.io` (or your repository's GitHub Pages URL)

**For root domain (optional, if you want vonreichardt.com to work):**
- Type: `A` records pointing to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

Or use a `CNAME` record if your DNS provider supports it for root domains.

### 4. Deploy

The deployment happens automatically when you push to the `main` branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

You can also manually trigger deployment:
1. Go to **Actions** tab in GitHub
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### 5. Verify Deployment

After deployment completes:
- Check the **Actions** tab for deployment status
- Visit https://www.vonreichardt.com/ to verify the site is live
- DNS propagation may take a few minutes to a few hours

## Files Created

- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
- `public/CNAME` - Custom domain configuration file
- `vite.config.js` - Updated with base path configuration

## Troubleshooting

### Site not loading
- Check DNS propagation: `dig www.vonreichardt.com`
- Verify GitHub Pages is enabled and using GitHub Actions
- Check Actions tab for any build errors

### Build fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Review build logs in GitHub Actions

### Custom domain not working
- Ensure CNAME file exists in `public/` directory
- Verify DNS records are correctly configured
- Wait for DNS propagation (can take up to 48 hours)

## Local Testing

Test the production build locally:

```bash
npm run build
npm run preview
```

This will build and serve the production version locally for testing.
