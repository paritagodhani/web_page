# TechVision - Complete Setup & Installation Guide

## Table of Contents
1. [System Requirements](#system-requirements)
2. [Installation Steps](#installation-steps)
3. [VS Code Setup](#vs-code-setup)
4. [Running the Project](#running-the-project)
5. [Build for Production](#build-for-production)
6. [Dark Mode Toggle](#dark-mode-toggle)
7. [Responsive Design](#responsive-design)
8. [Troubleshooting](#troubleshooting)
9. [Deployment](#deployment)

---

## System Requirements

### Minimum Requirements
- **Node.js**: v18.x or higher (v20.x recommended)
- **npm**: v9.x or higher
- **Git**: v2.0 or higher
- **OS**: Windows, macOS, or Linux

### Check Your Versions
```bash
# Check Node.js version
node --version  # Should be v18.0.0 or higher

# Check npm version
npm --version   # Should be v9.0.0 or higher

# Check Git version (optional)
git --version
```

---

## Installation Steps

### Step 1: Download the Project Files

**Option A: If you have the ZIP file**
```bash
# Extract the ZIP file to your desired location
# Navigate to the extracted folder
cd /path/to/techvision-project
```

**Option B: Using Git (if uploaded to GitHub)**
```bash
git clone https://github.com/yourusername/techvision.git
cd techvision
```

### Step 2: Install Dependencies

The project uses **pnpm** as the package manager (more efficient than npm), but npm also works.

**Using pnpm (Recommended)**
```bash
# Install pnpm globally if not already installed
npm install -g pnpm

# Install project dependencies
pnpm install

# Verify installation
pnpm --version
```

**Using npm**
```bash
# Install dependencies
npm install

# Verify installation
npm --version
```

### Step 3: Install VS Code Extensions

See [VS Code Setup](#vs-code-setup) section below for required and recommended extensions.

---

## VS Code Setup

### Required Extensions

Install these extensions in VS Code for the best development experience:

| Extension | ID | Purpose |
|-----------|----|----|
| **ES7+ React/Redux/React-Native snippets** | dsznajder.es7-react-js-snippets | React component shortcuts |
| **Prettier** | esbenp.prettier-vscode | Code formatting |
| **ESLint** | dbaeumer.vscode-eslint | Code linting & error detection |
| **Tailwind CSS IntelliSense** | bradlc.vscode-tailwindcss | Tailwind class autocomplete |
| **TypeScript Vue Plugin** | Vue.volar | Vue/TypeScript support |
| **Thunder Client** | rangav.vscode-thunder-client | API testing (optional but useful) |

### How to Install Extensions

**Method 1: Search in VS Code UI**
1. Open VS Code
2. Click the Extensions icon (⬜) on the left sidebar
3. Search for each extension name
4. Click "Install" on each extension

**Method 2: Install via Command Line**
```bash
# Copy and paste the entire command to install all at once
code --install-extension esbenp.prettier-vscode && \
code --install-extension dbaeumer.vscode-eslint && \
code --install-extension bradlc.vscode-tailwindcss && \
code --install-extension dsznajder.es7-react-js-snippets
```

### Recommended Additional Extensions

```bash
# GitHub Copilot (AI code completion)
code --install-extension GitHub.copilot

# Git History
code --install-extension donjayamanne.githistory

# REST Client
code --install-extension humao.rest-client

# Color Picker
code --install-extension anseki.vscode-color
```

### VS Code Settings (`.vscode/settings.json`)

Create a `.vscode` folder in your project root and add `settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}
```

---

## Running the Project

### Development Server

**Using pnpm (Recommended)**
```bash
pnpm dev
```

**Using npm**
```bash
npm run dev
```

**Using Yarn**
```bash
yarn dev
```

### Access the Application

Once the server starts, you'll see output like:
```
> next dev
  ▲ Next.js 16.2.6
  - Local:        http://localhost:3000
  - Environments: .env.local
```

Open your browser and navigate to: **http://localhost:3000**

### What You Should See

- Header with TechVision logo and navigation
- Hero section with animated content
- Features section with 4 feature cards
- Statistics section with animated counters
- Testimonials carousel
- Call-to-action section
- Footer with social links
- Theme toggle button in top right

---

## Dark Mode Toggle

### How It Works

The website includes a theme toggle button in the header (top-right corner):
- **Click the Moon icon** to switch to dark mode
- **Click the Sun icon** to switch back to light mode
- Your preference is saved in localStorage

### Dark Mode Features

✓ All sections adapt to dark mode
✓ Smooth color transitions
✓ Respects system dark mode preference
✓ Persists across page reloads
✓ Accessible and WCAG compliant

### Manual Theme Control (Advanced)

To force dark mode in development:
```javascript
// In browser console
document.documentElement.classList.add('dark');

// To remove dark mode
document.documentElement.classList.remove('dark');

// To toggle
document.documentElement.classList.toggle('dark');
```

---

## Responsive Design

### Tested Breakpoints

The website is fully responsive on all screen sizes:

| Device | Width | Testing |
|--------|-------|---------|
| **Mobile** | 320px - 640px | ✓ Tested |
| **Tablet** | 641px - 1024px | ✓ Tested |
| **Desktop** | 1025px+ | ✓ Tested |

### Testing Responsive Design

**Method 1: Chrome DevTools**
1. Open DevTools: `F12` or `Ctrl+Shift+I`
2. Click the device toggle icon (top-left)
3. Select different devices or custom dimensions

**Method 2: Responsive Design Mode**
```bash
# Firefox and Chrome shortcut
Ctrl+Shift+M (Windows/Linux)
Cmd+Shift+M (macOS)
```

### Mobile Features

- Hamburger menu on screens < 768px
- Single column layout
- Touch-friendly buttons
- Optimized image sizes
- Fast loading times

### Desktop Features

- Multi-column layouts
- Hover effects on interactive elements
- Sticky navigation
- Optimized spacing
- Full animation library

---

## Project Scripts

### Available Commands

```bash
# Start development server
pnpm dev                # or npm run dev

# Build for production
pnpm build              # or npm run build

# Start production server
pnpm start              # or npm start

# Run linting
pnpm lint               # or npm run lint

# Format code with Prettier
pnpm format             # or npm run format
```

### Understanding Package.json

```json
{
  "scripts": {
    "dev": "next dev",           // Start development
    "build": "next build",       // Production build
    "start": "next start",       // Run production
    "lint": "next lint"          // Check code quality
  }
}
```

---

## Build for Production

### Step 1: Create Optimized Build
```bash
pnpm build
# or
npm run build
```

Expected output:
```
> next build
  ▲ Next.js 16.2.6
  
  ✓ Compiled successfully
  ✓ Linting and checking validity of types
```

### Step 2: Test Production Build Locally
```bash
pnpm start
# or
npm start
```

The app will run at `http://localhost:3000` with production optimizations.

### Step 3: Verify Build Output
- `.next/` folder: Contains optimized production files
- Check file sizes: Typically 50-100KB for initial load
- No console errors: Check DevTools console

---

## Customization Guide

### Changing Company Name

1. **Header** (`components/header.tsx`)
   ```tsx
   <Link href="/" className="...">
     TechVision  // Change this
   </Link>
   ```

2. **Footer** (`components/footer.tsx`)
   ```tsx
   <h3 className="...">TechVision</h3>  // Change this
   ```

3. **Layout Metadata** (`app/layout.tsx`)
   ```tsx
   title: 'TechVision - Modern Web Development Solutions'
   // Change this and other metadata
   ```

### Changing Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --accent: #3b82f6;  /* Change this blue */
  --primary: #1f2937; /* Change this dark color */
  /* ... more variables */
}

.dark {
  --accent: #60a5fa;  /* Dark mode blue */
  /* ... more variables */
}
```

### Changing Content

- **Features**: Edit `components/features.tsx`
- **Stats**: Edit `components/stats.tsx`
- **Testimonials**: Edit `components/testimonials.tsx`
- **Hero Text**: Edit `components/hero.tsx`

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Port 3000 Already in Use
```bash
# Find and kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Or use a different port
PORT=3001 pnpm dev
```

#### Issue 2: Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml  # or package-lock.json for npm
pnpm install  # or npm install
```

#### Issue 3: Module Not Found Errors
```bash
# Reinstall all dependencies
pnpm install --force  # or npm install --force

# Clear Next.js cache
rm -rf .next
pnpm dev
```

#### Issue 4: Dark Mode Not Working
```javascript
// Check in browser console
console.log(document.documentElement.classList);
// Should show 'dark' class when enabled
```

#### Issue 5: Animations Not Smooth
- Ensure GPU acceleration is enabled
- Check browser console for errors
- Reduce `prefers-reduced-motion` if user has it enabled

#### Issue 6: Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build

# Check for TypeScript errors
pnpm lint
```

---

## Deployment

### Deploy to Vercel (Recommended)

**Option 1: Using Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to connect GitHub and configure
```

**Option 2: Using GitHub Integration**
1. Push code to GitHub
2. Go to vercel.com and sign up
3. Import your repository
4. Vercel auto-deploys on git push

### Deploy to Other Platforms

**Netlify**
```bash
npm run build
# Upload the `out` folder to Netlify
```

**AWS, Google Cloud, or Custom Server**
```bash
pnpm build
pnpm start
```

---

## Useful Terminal Commands

```bash
# Navigate to project
cd /path/to/techvision-project

# Check installed versions
node --version
npm --version
pnpm --version

# Open in VS Code
code .

# View all npm scripts
npm run

# Clean install (last resort)
rm -rf node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated

# Update all packages
npm update
```

---

## Getting Help

### Documentation Files
- `README.md` - Project overview and features
- `ANIMATIONS.md` - Animation implementation details
- `QUICK_START.md` - Quick reference guide
- `FILE_INDEX.md` - All project files
- `PROJECT_SUMMARY.md` - Complete project summary

### Useful Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [GSAP Documentation](https://greensock.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## Next Steps

1. ✓ Install all dependencies
2. ✓ Install VS Code extensions
3. ✓ Run `pnpm dev`
4. ✓ Open `http://localhost:3000`
5. ✓ Test dark mode toggle
6. ✓ Test responsive design
7. ✓ Customize company name and colors
8. ✓ Deploy to Vercel or preferred platform

**Congratulations! Your TechVision website is ready!** 🚀
