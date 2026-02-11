# 🚀 Setup Instructions - Premium Card Stack Design

Follow these steps to get your project running:

---

## **Step 1: Extract the Project**

Download and extract the `CARD_STACK_PROJECT` folder to your desired location.

---

## **Step 2: Open Terminal**

Navigate to the project directory:

```bash
cd CARD_STACK_PROJECT
```

---

## **Step 3: Install Dependencies**

Choose your preferred package manager:

### **Using npm:**
```bash
npm install
```

### **Using yarn:**
```bash
yarn install
```

### **Using pnpm (recommended for faster installs):**
```bash
pnpm install
```

⏱️ **Installation time:** 2-5 minutes depending on your internet speed

---

## **Step 4: Start Development Server**

Run the development server:

### **Using npm:**
```bash
npm run dev
```

### **Using yarn:**
```bash
yarn dev
```

### **Using pnpm:**
```bash
pnpm dev
```

---

## **Step 5: Open in Browser**

The development server will automatically open your browser to:

```
http://localhost:5173
```

If it doesn't open automatically, manually navigate to the URL shown in your terminal.

---

## **🎉 You're Done!**

You should now see the premium card stack design with:
- ✅ Two animated cards (red and blue)
- ✅ Cosmic background with nebula effects
- ✅ Hover effects that fan out the deck
- ✅ Click to flip cards with 3D animation
- ✅ Particle stars in the background

---

## **🔧 Troubleshooting**

### **Issue: Port 5173 already in use**
**Solution:** Change the port in `vite.config.ts`:
```typescript
server: {
  port: 3000, // Change to any available port
  open: true,
}
```

### **Issue: Module not found errors**
**Solution:** Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

### **Issue: Tailwind styles not loading**
**Solution:** Make sure `@import "tailwindcss";` is at the top of `src/styles/globals.css`

### **Issue: TypeScript errors**
**Solution:** Ensure you're using Node.js v16 or higher:
```bash
node --version
```

---

## **📦 Building for Production**

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The optimized files will be in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

---

## **🎨 Customization Quick Start**

### **Change Card Content:**
Edit `/src/app/App.tsx` lines 145-161

### **Change Colors:**
Edit `/src/app/components/CardStack.tsx` lines 18-52

### **Change Background:**
Edit `/src/app/App.tsx` lines 17-112

### **Change Animations:**
Edit `/src/app/components/CardStack.tsx` lines 55-63 (stack config)
Edit `/src/app/components/CardStack.tsx` lines 141-146 (flip animation)

---

## **📚 Additional Resources**

- **Motion (Framer Motion):** https://motion.dev/
- **Lucide Icons:** https://lucide.dev/
- **Tailwind CSS v4:** https://tailwindcss.com/
- **Vite Documentation:** https://vitejs.dev/
- **React Documentation:** https://react.dev/

---

## **💡 Pro Tips**

1. **Hot Reload:** The dev server supports hot reload - changes appear instantly!
2. **Console Errors:** Check browser console (F12) if something isn't working
3. **Mobile Testing:** Use browser dev tools to test responsive design
4. **Performance:** GPU acceleration is enabled by default for smooth 60fps

---

## **🆘 Need Help?**

If you encounter issues:
1. Check the browser console (F12)
2. Check the terminal for error messages
3. Verify all dependencies installed correctly
4. Make sure Node.js version is 16 or higher

---

**Happy Coding! 🎉**
