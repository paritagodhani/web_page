# TechVision - Commands Cheatsheet

## Quick Copy-Paste Commands

### Initial Setup (Run These First)

```bash
# 1. Navigate to project folder
cd /path/to/techvision-project

# 2. Install dependencies (use pnpm or npm)
pnpm install

# OR if you don't have pnpm:
npm install

# 3. Start development server
pnpm dev

# OR
npm run dev
```

Then open: **http://localhost:3000**

---

## Development Commands

### Start Development Server
```bash
pnpm dev
npm run dev
yarn dev
```

### Format Code
```bash
pnpm format
npm run format
```

### Check Code Quality
```bash
pnpm lint
npm run lint
```

### View Project Files
```bash
# List all files
ls -la

# Open in VS Code
code .

# Open current directory
open .
```

---

## Building for Production

### Create Production Build
```bash
pnpm build
npm run build
```

### Run Production Build Locally
```bash
pnpm start
npm start
```

### Build and Start
```bash
pnpm build && pnpm start
npm run build && npm start
```

---

## VS Code Extensions (Install All at Once)

### Copy & Paste This Command
```bash
code --install-extension esbenp.prettier-vscode && \
code --install-extension dbaeumer.vscode-eslint && \
code --install-extension bradlc.vscode-tailwindcss && \
code --install-extension dsznajder.es7-react-js-snippets && \
code --install-extension GitHub.copilot && \
code --install-extension donjayamanne.githistory
```

---

## Dependency Management

### Install All Dependencies
```bash
pnpm install
npm install
```

### Add New Package
```bash
# Using pnpm
pnpm add package-name

# Using npm
npm install package-name
```

### Update All Packages
```bash
# Using pnpm
pnpm update

# Using npm
npm update
```

### Remove Package
```bash
# Using pnpm
pnpm remove package-name

# Using npm
npm uninstall package-name
```

### Check Outdated Packages
```bash
npm outdated
```

---

## Troubleshooting Commands

### Clear Node Modules & Reinstall
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install

# OR with npm
rm -rf node_modules package-lock.json
npm install
```

### Clear Next.js Cache
```bash
rm -rf .next
pnpm dev
```

### Kill Process on Port 3000 (Windows)
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Kill Process on Port 3000 (macOS/Linux)
```bash
lsof -i :3000
kill -9 <PID>
```

### Use Different Port
```bash
PORT=3001 pnpm dev
```

---

## Git Commands (if using version control)

### Initialize Git
```bash
git init
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Your message here"
```

### Push to GitHub
```bash
git push origin main
```

### Clone Repository
```bash
git clone https://github.com/username/repo.git
```

---

## Navigation Commands

### Change Directory
```bash
# Windows, macOS, Linux
cd /path/to/techvision-project

# Go back one folder
cd ..

# Go to home directory
cd ~
```

### List Files
```bash
# List files
ls

# List with details
ls -la

# List only directories
ls -d */
```

### Open In Explorer/Finder
```bash
# Windows
start .

# macOS
open .

# Linux
nautilus .
```

---

## Package Manager Installation

### Install pnpm (Recommended)
```bash
npm install -g pnpm

# Verify installation
pnpm --version
```

### Install Node.js
Go to [nodejs.org](https://nodejs.org) and download the LTS version.

Or use a version manager:

```bash
# Using nvm (macOS/Linux)
nvm install 20.0.0
nvm use 20.0.0

# Using nvm-windows (Windows)
# Download from: https://github.com/coreybutler/nvm-windows
```

---

## Check Versions

```bash
# Node.js version
node --version

# npm version
npm --version

# pnpm version
pnpm --version

# Next.js version
npx next --version
```

---

## Environment Variables

### Create .env.local File
```bash
# Create empty file
touch .env.local

# Add your variables (example)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Load Environment Variables
Add to `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_API_KEY=your_key_here
```

---

## Deployment Commands

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy production
netlify deploy --prod
```

---

## Database (if needed later)

```bash
# Install Prisma (optional)
pnpm add prisma @prisma/client

# Initialize Prisma
npx prisma init

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

---

## Testing (Optional)

```bash
# Run tests
npm run test

# Watch mode
npm run test -- --watch

# Coverage
npm run test -- --coverage
```

---

## Fast Command Reference

| Task | Command |
|------|---------|
| Start | `pnpm dev` |
| Build | `pnpm build` |
| Production | `pnpm start` |
| Format | `pnpm format` |
| Lint | `pnpm lint` |
| Install | `pnpm install` |
| Add Package | `pnpm add <name>` |
| VS Code | `code .` |
| Update Packages | `pnpm update` |
| Clear Cache | `rm -rf .next` |
| Port 3001 | `PORT=3001 pnpm dev` |

---

## Complete Fresh Start (Nuclear Option)

If everything breaks:

```bash
# 1. Delete node_modules and lock files
rm -rf node_modules pnpm-lock.yaml .next

# 2. Reinstall everything
pnpm install

# 3. Clear cache
rm -rf .next

# 4. Start fresh
pnpm dev
```

---

## Helpful Shortcuts

### VS Code
- `Ctrl+Shift+P` - Command palette
- `Ctrl+grave` - Toggle terminal
- `Ctrl+/` - Comment code
- `Alt+Shift+Down` - Duplicate line
- `Ctrl+D` - Select next occurrence

### Browser DevTools
- `F12` - Open DevTools
- `Ctrl+Shift+M` - Responsive design mode
- `Ctrl+Shift+I` - Inspect element
- `Ctrl+Shift+J` - Open console

---

**Save this file and use it as a quick reference!** ✨
