# 🌍 Environment Variables

Complete guide to environment configuration, secrets management, and deployment setup.

---

## 📋 Overview

Environment variables control site configuration across different environments (development, staging, production). They are defined in `.env.local` (not committed to Git) and accessed via `process.env`.

---

## 🔐 Environment File Structure

### `.env.local` (Local Development)

Create this file in the project root (it's gitignored):

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional: Build Analysis
ANALYZE=false
```

### `.env.example` (Template)

Commit this file to Git as a template:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://example.com

# Optional: Enable bundle analyzer
ANALYZE=false
```

---

## 🌐 Public Variables

### `NEXT_PUBLIC_SITE_URL`

**Purpose**: Canonical site URL for metadata, sitemap, and structured data

**Type**: String (URL)

**Required**: ✅ Yes (defaults to `https://ai-workshop.example.com`)

**Example Values**:
```bash
# Development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Staging
NEXT_PUBLIC_SITE_URL=https://staging.example.com

# Production
NEXT_PUBLIC_SITE_URL=https://example.com
```

**Usage in Code**:

```typescript
// lib/metadata.ts
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-workshop.example.com";

// app/sitemap.ts
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
```

**Affects**:
- OpenGraph URLs (`og:url`)
- Canonical links (`<link rel="canonical">`)
- Sitemap XML entries
- Structured data (Schema.org `@id` fields)
- Robots.txt sitemap reference

---

## 🔒 Private Variables

### `ANALYZE`

**Purpose**: Enable webpack bundle analyzer during builds

**Type**: String (`"true"` or `"false"`)

**Required**: ❌ Optional (defaults to `false`)

**Example Values**:
```bash
# Disable (default)
ANALYZE=false

# Enable
ANALYZE=true
```

**Usage in Code**:

```typescript
// next.config.ts
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
```

**Build Command**:
```bash
ANALYZE=true npm run build
```

Opens interactive treemap visualization at `http://localhost:8888`.

---

## 📦 Environment Variable Types

### Public Variables (`NEXT_PUBLIC_*`)

**Exposed to**: Browser and server

**Security**: Do NOT store secrets (API keys, database URLs, etc.)

**Use Cases**:
- Site URL
- API endpoints (public only)
- Feature flags (non-sensitive)
- Analytics IDs (public)

**Example**:
```typescript
// Accessible in browser
console.log(process.env.NEXT_PUBLIC_SITE_URL);
```

---

### Private Variables (No Prefix)

**Exposed to**: Server only (build time and runtime)

**Security**: Safe for secrets

**Use Cases**:
- API keys
- Database credentials
- Third-party service tokens
- Build flags

**Example**:
```typescript
// Only accessible on server
const apiKey = process.env.PRIVATE_API_KEY; // Browser: undefined
```

---

## 🚀 Deployment Configurations

### Vercel

**Environment Variables UI**: Project Settings → Environment Variables

**Setup**:
1. Go to project settings
2. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com`
   - `ANALYZE`: `false`
3. Apply to: Production, Preview, Development
4. Redeploy to apply changes

**Automatic Variables** (provided by Vercel):
- `VERCEL`: `"1"` (indicates Vercel environment)
- `VERCEL_URL`: Auto-generated deployment URL
- `VERCEL_ENV`: `"production"`, `"preview"`, or `"development"`

**Best Practice**:
```typescript
// Use Vercel URL as fallback in previews
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                'https://ai-workshop.example.com');
```

---

### Netlify

**Environment Variables UI**: Site Settings → Build & Deploy → Environment

**Setup**:
1. Navigate to site settings
2. Add variables:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-domain.com`
3. Save and redeploy

**Deploy Contexts**: Production, Deploy Previews, Branch Deploys

---

### Docker

**Using `.env` file**:
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .

# Build with args
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

RUN npm install
RUN npm run build

CMD ["npm", "start"]
```

**Docker Compose**:
```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    environment:
      - NEXT_PUBLIC_SITE_URL=https://example.com
      - ANALYZE=false
    ports:
      - "3000:3000"
```

**Build Command**:
```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://example.com -t my-app .
```

---

### GitHub Actions

**Workflow file** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}
        run: npm run build
      
      - name: Deploy
        run: npm run deploy
```

**GitHub Secrets**: Settings → Secrets and variables → Actions → New repository secret

---

## 🔧 Development Workflow

### Initial Setup

**1. Clone repository:**
```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

**2. Create `.env.local`:**
```bash
cat > .env.local << EOF
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ANALYZE=false
EOF
```

**3. Install and run:**
```bash
npm install
npm run dev
```

---

### Environment-Specific Configs

**Development** (`.env.local`):
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Staging** (Platform env vars):
```bash
NEXT_PUBLIC_SITE_URL=https://staging.example.com
```

**Production** (Platform env vars):
```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

---

## 🛠️ Common Tasks

### Change Site URL

**1. Update `.env.local`:**
```bash
NEXT_PUBLIC_SITE_URL=https://new-domain.com
```

**2. Restart dev server:**
```bash
# Stop current server (Ctrl+C)
npm run dev
```

**3. Verify in browser:**
```typescript
// In browser console
console.log(process.env.NEXT_PUBLIC_SITE_URL);
// Output: https://new-domain.com
```

---

### Enable Bundle Analysis

**1. Run build with flag:**
```bash
ANALYZE=true npm run build
```

**2. View results:**
Opens browser automatically at `http://localhost:8888`

**3. Analyze output:**
- Largest modules
- Duplicate dependencies
- Bundle splits

---

### Add New Environment Variable

**1. Define in `.env.local`:**
```bash
# .env.local
NEXT_PUBLIC_ANALYTICS_ID=GA-12345
```

**2. Update `.env.example`:**
```bash
# .env.example
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

**3. Use in code:**
```typescript
// app/layout.tsx
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

if (analyticsId) {
  // Initialize analytics
}
```

**4. Document in this file** (add to relevant section)

**5. Update deployment platform** with new variable

---

## 🐛 Troubleshooting

### Variable Not Updating

**Problem**: Changed `.env.local` but value still shows old value

**Solution**:
1. Restart dev server (`Ctrl+C` then `npm run dev`)
2. Clear Next.js cache: `rm -rf .next`
3. Verify file is named exactly `.env.local` (not `.env`, `.env.development`)

---

### Variable Undefined in Browser

**Problem**: `process.env.MY_VAR` is `undefined` in browser

**Solutions**:

**1. Add `NEXT_PUBLIC_` prefix:**
```bash
# ❌ Not exposed to browser
MY_VAR=value

# ✅ Exposed to browser
NEXT_PUBLIC_MY_VAR=value
```

**2. Use server-side only:**
```typescript
// Use in API routes, getServerSideProps, or Server Components
export default function Page() {
  // Server Component - can access private vars
  const apiKey = process.env.PRIVATE_API_KEY;
  
  return <div>...</div>;
}
```

---

### Environment Variables in Docker

**Problem**: Variables not available in Docker build

**Solution**: Pass as build args:
```dockerfile
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
```

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://example.com .
```

---

## 📖 Best Practices

### ✅ Do

- **Use descriptive names**: `NEXT_PUBLIC_SITE_URL` not `URL`
- **Add defaults**: `process.env.VAR || 'default-value'`
- **Document all variables**: Update this guide when adding new ones
- **Validate on startup**: Check required variables exist
- **Use `.env.example`**: Template for new developers
- **Gitignore `.env.local`**: Never commit secrets

### ❌ Don't

- **Store secrets in `NEXT_PUBLIC_*`**: Exposed to browser
- **Hardcode values**: Use env vars for all environment-specific config
- **Commit `.env.local`**: Contains sensitive data
- **Use `.env` in Next.js**: Use `.env.local` instead
- **Change vars without restart**: Must restart server

---

## 🔗 Related Documentation

- **[Next.js Configuration](./nextjs.md)** - Build and deployment config
- **[SEO & Metadata](./seo.md)** - How `SITE_URL` affects SEO
- **[Next.js Env Vars Docs](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)** - Official guide

---

## 📋 Variable Reference

| Variable | Type | Required | Default | Usage |
|----------|------|----------|---------|-------|
| `NEXT_PUBLIC_SITE_URL` | Public | ✅ | `https://ai-workshop.example.com` | Metadata, sitemap, SEO |
| `ANALYZE` | Private | ❌ | `false` | Bundle analysis |

---

**Last Updated**: 2025-11-10  
**Maintained By**: Development Team
