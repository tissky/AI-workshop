# 📜 Scripts Directory

This directory contains automation scripts for the AI创意工坊 project.

## Available Scripts

### `setup.sh` - Automated Project Setup

**Purpose:** Automates the entire project configuration and deployment preparation workflow.

**Usage:**
```bash
npm run setup
# or directly:
bash scripts/setup.sh
```

**Features:**
- ✅ Validates Node.js and npm versions
- ✅ Installs project dependencies
- ✅ Checks/installs Vercel CLI (optional)
- ✅ Configures environment variables (.env.local)
- ✅ Runs build validation (optional)
- ✅ Offers deployment options (optional)

**Requirements:**
- Node.js >= 18.0.0
- npm >= 9.0.0
- Bash shell (Linux, macOS, WSL on Windows)

**Interactive Prompts:**

The script will prompt you for:
1. **Install Vercel CLI?** - Install global Vercel CLI tool
2. **Overwrite .env.local?** - If file exists, backup and create new
3. **Website URL** - Configure NEXT_PUBLIC_SITE_URL
4. **Enable Bundle Analyzer?** - Enable webpack bundle analysis
5. **Run build test?** - Validate production build
6. **Deployment option** - Deploy to Vercel preview/production or skip

**Exit Codes:**
- `0` - Success
- `1` - Error (Node.js version, dependency installation, build failure)

**Environment Variables Set:**
- `NEXT_PUBLIC_SITE_URL` - Website URL for SEO and sitemap
- `ANALYZE` - Enable/disable webpack bundle analyzer

**Detailed Documentation:**
See [docs/deployment/vercel.md](../docs/deployment/vercel.md) for comprehensive setup and deployment guide.

---

## Script Development Guidelines

When adding new scripts to this directory:

1. **Use Bash for shell scripts** - Ensure compatibility with Linux/macOS/WSL
2. **Make scripts executable** - `chmod +x scripts/your-script.sh`
3. **Add shebang** - `#!/bin/bash` at the top
4. **Use `set -e`** - Exit immediately on error
5. **Add clear messaging** - Use color-coded output for success/error/warning
6. **Document in this README** - Add script description and usage
7. **Add npm script entry** - Add convenience command to package.json
8. **Test thoroughly** - Verify on clean environment

---

## Color Output Convention

Scripts in this directory use consistent color coding:

| Color | Usage | Example |
|-------|-------|---------|
| 🟢 Green | Success messages | `✓ Dependencies installed successfully` |
| 🔴 Red | Error messages | `✗ Node.js version too low` |
| 🟡 Yellow | Warning messages | `⚠ Vercel CLI not found` |
| 🔵 Blue | Info messages | `ℹ Checking Node.js version...` |

---

## Future Scripts (Planned)

- `test.sh` - Run comprehensive test suite
- `deploy-preview.sh` - Quick preview deployment
- `deploy-production.sh` - Production deployment with checks
- `backup.sh` - Backup environment and configurations
- `cleanup.sh` - Clean build artifacts and caches

---

**Last Updated:** 2024-11  
**Maintainer:** Development Team
