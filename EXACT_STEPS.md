# 📝 EXACT STEPS - Copy & Paste Ready

## ⚡ The Fastest Way to Get Running

### Step 1: Open Terminal/Command Prompt

**Windows:**
1. Press Windows key + R
2. Type: `cmd`
3. Press Enter

**Mac:**
1. Press Command + Space
2. Type: `terminal`
3. Press Enter

**Linux:**
1. Press Ctrl + Alt + T

---

## Step 2: Copy & Paste These Exact Commands

### Command 1 - Navigate to Project
```bash
cd /path/to/techvision-project
```

**If you don't know the path:**
- Windows: `cd C:\Users\YourUsername\Desktop\techvision-project`
- Mac: `cd /Users/YourUsername/Desktop/techvision-project`
- Linux: `cd /home/username/Desktop/techvision-project`

### Command 2 - Install Dependencies
```bash
npm install
```

**Wait for this to finish.** You'll see "added XXX packages" when done.

### Command 3 - Start Development Server
```bash
npm run dev
```

**You should see:**
```
▲ Next.js 16.2.6
  - Local:        http://localhost:3000

✓ Ready in 2.5s
```

---

## Step 3: Open Browser

Copy this into your browser address bar:
```
http://localhost:3000
```

Press Enter.

✅ **Done! Your website is now running!**

---

## VS Code Extensions (One Command)

Copy and paste this **entire thing** into your terminal:

```bash
code --install-extension esbenp.prettier-vscode && code --install-extension dbaeumer.vscode-eslint && code --install-extension bradlc.vscode-tailwindcss && code --install-extension dsznajder.es7-react-js-snippets
```

---

## Testing Your Website

### Dark Mode Toggle
1. Look at top-right corner
2. Click the moon icon ☀️
3. Site turns dark!
4. Click sun icon ☀️ to switch back

### Test Responsive Design
1. Press: **Ctrl + Shift + M**
2. See mobile/tablet/desktop versions

### Test on Your Phone
In terminal:
```bash
ipconfig
```
Look for "IPv4 Address" (e.g., 192.168.1.100)

On your phone, visit: `192.168.1.100:3000`

---

## Useful Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for errors
npm run lint

# Stop the server
Ctrl+C (in terminal)

# Use different port
PORT=3001 npm run dev

# Then visit: http://localhost:3001
```

---

## Customization Commands

### Change Company Name

**Open file:** `components/header.tsx`

Find this line (around line 50):
```typescript
TechVision
```

Change to your company name.

Save the file. Browser automatically reloads!

### Change Colors

**Open file:** `app/globals.css`

Find this (around line 65):
```css
--primary: #1f2937;
--accent: #3b82f6;
```

Change to your colors. Examples:
```css
--primary: #7c3aed;    /* Purple */
--accent: #ec4899;     /* Pink */
```

Save. Browser reloads instantly!

---

## Deployment Commands

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site goes live! 🚀

### Deploy to Netlify

```bash
npm run build
```

Then:
1. Go to https://netlify.com
2. Drag & drop the `.next` folder
3. Done!

---

## Troubleshooting Commands

### npm not found

Install Node.js from nodejs.org, then in terminal:
```bash
node --version
npm --version
```

### Clear cache

```bash
npm cache clean --force
```

### Reinstall everything

```bash
rm -rf node_modules
npm install
```

### Port 3000 in use

```bash
PORT=3001 npm run dev
```

### Check all running processes

**Mac/Linux:**
```bash
lsof -i :3000
```

**Windows:**
```bash
netstat -ano | findstr :3000
```

---

## File Editing Commands

### Using VS Code

```bash
# Open project in VS Code
code .

# Format entire project
npm run lint
```

### Using nano (Mac/Linux)

```bash
nano components/header.tsx
# Edit, then press Ctrl+X, Y, Enter
```

---

## Quick Reference Table

| Task | Command |
|------|---------|
| Go to project | `cd /path/to/project` |
| Install packages | `npm install` |
| Start dev server | `npm run dev` |
| Stop server | `Ctrl+C` |
| Build for production | `npm run build` |
| Start prod server | `npm run start` |
| Check errors | `npm run lint` |
| Use port 3001 | `PORT=3001 npm run dev` |
| Clear cache | `npm cache clean --force` |
| Reinstall | `rm -rf node_modules && npm install` |
| Deploy to Vercel | `npm install -g vercel && vercel` |

---

## Terminal Tips

### Save commands for later

**Windows:** Right-click terminal → Properties → Edit → Save
**Mac/Linux:** Use arrow keys to recall previous commands

### Copy from terminal

**Windows:** Right-click → Copy
**Mac/Linux:** Command+C or highlight and Command+C

### Paste to terminal

**Windows:** Right-click → Paste
**Mac/Linux:** Command+V or right-click → Paste

---

## Documentation Files (In Order)

1. **Start Here:** `README.md`
2. **Then Read:** `INSTALLATION_SUMMARY.md`
3. **Quick Help:** `QUICK_REFERENCE.md`
4. **Detailed:** `README_COMPLETE.md`
5. **Troubleshooting:** Check these if issues arise

---

## Common Mistakes & Fixes

### ❌ "npm: command not found"
→ Install Node.js from nodejs.org
→ Restart terminal
→ Try again

### ❌ "Cannot find module"
→ Run: `npm install`
→ Wait for completion
→ Try: `npm run dev`

### ❌ "EADDRINUSE: address already in use :::3000"
→ Run: `PORT=3001 npm run dev`
→ Visit: http://localhost:3001

### ❌ "Dark mode not working"
→ Hard refresh: Ctrl+Shift+R
→ Or: Go incognito/private mode
→ Try again

### ❌ "Site not loading"
→ Make sure terminal shows "Ready in Xs"
→ Make sure you visit http://localhost:3000
→ Try: http://127.0.0.1:3000

---

## Success Checklist

- [ ] Terminal open
- [ ] Navigated to project folder
- [ ] Ran `npm install` (completed)
- [ ] Ran `npm run dev` (no errors)
- [ ] Browser shows http://localhost:3000
- [ ] Website loads
- [ ] Dark mode toggle works
- [ ] Responsive design works (Ctrl+Shift+M)

✅ **All checked? Perfect!**

---

## Next Steps After Running

1. ✅ Test dark mode (click moon icon)
2. ✅ Test responsive (Ctrl+Shift+M)
3. ✅ Read customization guides
4. ✅ Change company name
5. ✅ Update colors
6. ✅ Change content
7. ✅ Deploy when ready

---

## Real Example Commands

**If your project is on Desktop:**

```bash
# Windows
cd C:\Users\John\Desktop\techvision-project

# Mac
cd /Users/john/Desktop/techvision-project

# Linux
cd /home/john/Desktop/techvision-project
```

Then:
```bash
npm install
npm run dev
```

Then open: `http://localhost:3000`

**That's it! 🎉**

---

## Getting Help

If something doesn't work:

1. Read the **terminal error message**
2. Check **QUICK_REFERENCE.md**
3. Check **README_COMPLETE.md**
4. Google the error message
5. Check troubleshooting section above

---

## Files You'll Edit Most

```
components/
├── header.tsx          ← Change logo/nav here
├── hero.tsx            ← Change hero text here
├── features.tsx        ← Change features here
├── products.tsx        ← Change products here
└── footer.tsx          ← Change footer here

app/
└── globals.css         ← Change colors here
```

---

## You're Ready!

**Everything you need is here.**

**Just run:**
```bash
npm run dev
```

**Then visit:** http://localhost:3000

**Enjoy your premium website! 🚀**

---

**Questions?** See README_COMPLETE.md for detailed help!
