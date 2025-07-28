# GitHub Pages Deployment

This project is automatically deployed to GitHub Pages at:
**https://marlink.github.io/cost-calculator-2025/**

## 🔧 Configuration

### GitHub Repository Settings
- **Repository**: `marlink/cost-calculator-2025`
- **Pages Source**: GitHub Actions
- **Custom Domain**: Not configured (using default GitHub Pages URL)

### Deployment Workflow
- **File**: `.github/workflows/github-pages.yml`
- **Trigger**: Push to `main` branch or manual dispatch
- **Build**: Next.js static export
- **Deploy**: Automatic to GitHub Pages

### Next.js Configuration
- **Static Export**: Enabled (`output: 'export'`)
- **Base Path**: `/cost-calculator-2025` (for GitHub Pages)
- **Asset Prefix**: `/cost-calculator-2025/` (for proper asset loading)
- **Trailing Slash**: Enabled for GitHub Pages compatibility

## 🚀 Deployment Process

1. **Automatic**: Push to `main` branch triggers deployment
2. **Manual**: Use "Actions" tab → "Deploy to GitHub Pages" → "Run workflow"

## 🔗 URLs

- **Live Site**: https://marlink.github.io/cost-calculator-2025/
- **Repository**: https://github.com/marlink/cost-calculator-2025
- **Actions**: https://github.com/marlink/cost-calculator-2025/actions

## 📝 Notes

- GitHub Pages deployment runs in addition to Vercel deployment
- Both platforms will have the same content
- GitHub Pages is free and always available
- Vercel provides better performance and preview deployments

## 🛠️ Troubleshooting

If deployment fails:
1. Check GitHub Actions logs
2. Ensure repository has Pages enabled
3. Verify workflow permissions are correct
4. Check Next.js build succeeds locally

## 🔄 Dual Deployment Strategy

This project uses both:
- **GitHub Pages**: Free, reliable hosting
- **Vercel**: Performance optimized, preview deployments