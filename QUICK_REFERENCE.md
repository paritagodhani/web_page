# 🚀 Quick Reference Guide - TechVision

## Installation (3 Steps)

```bash
# Step 1: Go to project folder
cd /path/to/techvision-project

# Step 2: Install packages
npm install

# Step 3: Run development server
npm run dev

# Open: http://localhost:3000
```

---

## VS Code Extensions (Copy & Paste)

```bash
code --install-extension esbenp.prettier-vscode && \
code --install-extension dbaeumer.vscode-eslint && \
code --install-extension bradlc.vscode-tailwindcss && \
code --install-extension dsznajder.es7-react-js-snippets
```

---

## Essential Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Check for errors |
| `npm install` | Install dependencies |
| `PORT=3001 npm run dev` | Use port 3001 |

---

## Testing the Website

### Dark Mode Toggle
- Click **Moon icon** ☀️ in top-right corner
- Preference is saved automatically

### Responsive Test
- Press: **Ctrl + Shift + M** (Windows/Linux)
- Or: **Cmd + Shift + M** (Mac)

### Test on Phone
1. Get your IP: `ipconfig` (Windows) or `ifconfig` (Mac)
2. Visit on phone: `192.168.x.x:3000`

---

## File Locations & Customization

### Change Company Name
- `components/header.tsx` (line 50)
- `components/footer.tsx`
- `app/layout.tsx` (metadata)

### Change Colors
- File: `app/globals.css`
- Light colors: Lines 65-90
- Dark colors: Lines 132-170

### Update Content
- Hero: `components/hero.tsx` (line 30)
- Features: `components/features.tsx` (line 9)
- Products: `components/products.tsx` (line 7)
- Team: `components/team.tsx` (line 7)
- Stats: `components/stats.tsx` (line 20)

---

## Browser DevTools

### Open DevTools
- Windows/Linux: **F12**
- Mac: **Cmd + Option + I**

### Test Responsive
- Chrome: **Ctrl + Shift + M**
- Firefox: **Ctrl + Shift + M**

### Check Console Errors
- DevTools → Console tab
- Look for red error messages

---

## Troubleshooting

### Port 3000 Already in Use
```bash
PORT=3001 npm run dev
```

### npm not found
- Install Node.js from nodejs.org
- Restart terminal
- Type: `npm --version`

### Dependencies Error
```bash
rm -rf node_modules
npm install
```

### Dark Mode Not Working
- Hard refresh: **Ctrl + Shift + R**
- Clear storage: DevTools → Application → Storage → Clear All

---

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag .next folder to Netlify.com
```

---

## Project Statistics

- ✅ **10 Sections** - All sections included
- ✅ **20+ Animations** - Smooth animations throughout
- ✅ **Dark Mode** - Full dark/light support
- ✅ **Responsive** - Mobile to desktop optimized
- ✅ **Components** - 11 reusable components
- ✅ **TypeScript** - 100% type-safe

---

## Documentation Files

| File | Content |
|------|---------|
| **README.md** | Main guide (this is the primary) |
| **README_COMPLETE.md** | Detailed guide (614 lines) |
| **QUICK_REFERENCE.md** | This quick ref |
| **SETUP_GUIDE.md** | Step-by-step setup |
| **COMMANDS_CHEATSHEET.md** | All commands |
| **FEATURES_OVERVIEW.md** | Feature list |

---

## Common Tasks

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

### Format Code
```bash
npx prettier --write .
```

### Check for Errors
```bash
npm run lint
```

### Update Dependencies
```bash
npm update
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl+Shift+M** | Toggle DevTools responsive mode |
| **F12** | Open DevTools |
| **Ctrl+Shift+P** | VS Code command palette |
| **Ctrl+P** | Quick file open (VS Code) |
| **Ctrl+/** | Toggle comment (VS Code) |
| **Alt+Up/Down** | Move line (VS Code) |

---

## Environment Setup

### Windows
1. Download Node.js from nodejs.org
2. Run installer
3. Open Command Prompt
4. Type: `node --version`

### Mac
1. Download Node.js from nodejs.org
2. Run installer
3. Open Terminal
4. Type: `node --version`

### Linux
```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

---

## Color Palette

### Light Mode
- Primary: `#1f2937` (Dark Gray)
- Accent: `#3b82f6` (Blue)
- Background: `#f8f7f4` (Off-White)

### Dark Mode
- Primary: `#e2e8f0` (Light Gray)
- Accent: `#60a5fa` (Light Blue)
- Background: `#0f172a` (Dark Navy)

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion/
- **GSAP**: https://gsap.com/

---

## Quick Links

- 🏠 **Local**: http://localhost:3000
- 📚 **Docs**: README.md (this project)
- 🚀 **Deploy**: vercel.com
- 🎨 **Colors**: app/globals.css (line 65)
- 📝 **Content**: components/ folder

---

## Summary

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:3000
4. ✅ Test dark mode (Moon icon)
5. ✅ Test responsive (Ctrl+Shift+M)
6. ✅ Customize as needed
7. ✅ Deploy when ready

**That's it! You're all set! 🎉**

---

**Need Help?** Check README_COMPLETE.md for detailed instructions!
