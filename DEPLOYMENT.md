# Cost Calculator - Deployment & Automation Guide

## 🌐 Live Deployments

- **GitHub Pages**: https://marlink.github.io/cost-calculator-2025/
- **Vercel**: Auto-deployed on push to main

## 🚀 Quick Start

### First Time Setup
```bash
# Make automation script executable
chmod +x dev-automation.sh

# Setup project (install deps, build, verify)
./dev-automation.sh setup
```

### Daily Development
```bash
# Start development server
./dev-automation.sh dev

# Or use npm
npm run dev
```

### Deploy to Production
```bash
# Auto-deploy (lint, build, commit, push)
./dev-automation.sh deploy

# Or use npm
npm run auto-deploy
```

## 🛠 Available Commands

### Automation Script Commands
- `./dev-automation.sh setup` - First time project setup
- `./dev-automation.sh dev` - Start development server
- `./dev-automation.sh build` - Build project
- `./dev-automation.sh lint` - Run linting
- `./dev-automation.sh logos` - Regenerate all logos
- `./dev-automation.sh commit` - Commit and push changes
- `./dev-automation.sh deploy` - Full deployment process

### NPM Script Commands
- `npm run dev` - Start development server
- `npm run build` - Build project
- `npm run lint` - Run linting
- `npm run logos` - Regenerate all logos
- `npm run deploy` - Deploy to Vercel production
- `npm run deploy:preview` - Deploy to Vercel preview
- `npm run auto-deploy` - Full automated deployment

## 🔄 Automated CI/CD Pipeline

### GitHub Actions Workflow
The project includes automated GitHub Actions that:

1. **On Pull Requests:**
   - Runs linting and tests
   - Creates preview deployment on Vercel
   - Comments deployment URL on PR

2. **On Main Branch Push:**
   - Runs linting and tests
   - Deploys to production on Vercel
   - Updates live site automatically

### Required GitHub Secrets
Add these secrets to your GitHub repository:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
```

## 📦 Deployment Platforms

### GitHub Pages (Primary)
- **URL**: https://marlink.github.io/cost-calculator-2025/
- **Deployment**: Automatic on push to main branch
- **Configuration**: `.github/workflows/github-pages.yml`
- **Always Available**: ✅ Free GitHub hosting

### Vercel (Secondary)
1. Connect your GitHub repository to Vercel
2. Vercel will auto-deploy on every push to main
3. Preview deployments for all PRs

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
npm run deploy

# Deploy preview
npm run deploy:preview
```

## 🔧 Local Development Workflow

### Standard Workflow
1. `./dev-automation.sh dev` - Start development
2. Make your changes
3. `./dev-automation.sh logos` - Regenerate logos if needed
4. `./dev-automation.sh deploy` - Deploy when ready

### Quick Commands
```bash
# Regenerate logos only
npm run logos

# Quick commit and push
./dev-automation.sh commit

# Full deployment pipeline
./dev-automation.sh deploy
```

## 🎯 Benefits

### Time Savings
- **Before:** Manual build, commit, push, deploy (5-10 minutes)
- **After:** Single command deployment (30 seconds)

### Automation Features
- ✅ Automatic dependency installation
- ✅ Automatic linting and building
- ✅ Automatic logo regeneration
- ✅ Automatic git commits and pushes
- ✅ Automatic Vercel deployments
- ✅ Preview deployments for testing
- ✅ Production deployments on main branch

### Error Prevention
- Prevents deploying broken code
- Ensures all logos are regenerated
- Validates builds before deployment
- Consistent deployment process

## 🚨 Troubleshooting

### Permission Issues
```bash
chmod +x dev-automation.sh
chmod +x convert_logo.sh
```

### Git Issues
```bash
git remote add origin https://github.com/yourusername/your-repo.git
```

### Vercel Issues
```bash
vercel login
vercel link
```

## 📝 Next Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit with automation"
   git remote add origin https://github.com/yourusername/cost-calculator.git
   git push -u origin main
   ```

2. **Setup Vercel:**
   - Go to vercel.com
   - Import your GitHub repository
   - Add required environment variables

3. **Configure GitHub Secrets:**
   - Go to GitHub repository settings
   - Add Vercel secrets for automated deployments

4. **Start Developing:**
   ```bash
   ./dev-automation.sh dev
   ```

Now you have a fully automated development and deployment pipeline! 🎉