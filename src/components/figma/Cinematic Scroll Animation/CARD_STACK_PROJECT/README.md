# Premium Card Stack Design - Cyberpunk Edition

A stunning cyberpunk/neon aesthetic card stack with 3D flip animations, scroll-based deck fan-out, and cosmic background effects.

## 🚀 Quick Start

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📦 Dependencies

- **React 18+**
- **motion** (formerly Framer Motion) - For smooth animations
- **lucide-react** - For icons
- **Tailwind CSS v4** - For styling

All dependencies are listed in `package.json`.

## 📁 Project Structure

```
CARD_STACK_PROJECT/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── CardStack.tsx       # Main card component
│   │   └── App.tsx                 # Main application file
│   ├── styles/
│   │   └── globals.css             # Global styles
│   └── main.tsx                    # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Features

✅ **Cyberpunk/Neon Aesthetic** - Red and blue themes with intense neon glows
✅ **3D Flip Animation** - Smooth 0.6s flip with GPU acceleration
✅ **Deck Fan-Out Effect** - 6 background cards that spread on hover
✅ **Cosmic Background** - Nebula effects with particle stars
✅ **Grid Pattern Overlay** - Cyberpunk-style grid on stack cards
✅ **Optimized Performance** - 60fps with GPU-accelerated transforms
✅ **Responsive Design** - Works on mobile and desktop
✅ **One Card Flip Logic** - Only one card can be flipped at a time

## 🎯 Usage

### Basic Implementation

```tsx
import { CardStack } from './components/CardStack';
import { useState } from 'react';

function MyComponent() {
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <CardStack
      type="entrepreneur"  // or "career"
      title="Create Your Empire"
      subtitle="Entrepreneur Path"
      description="Launch and scale your own startup with expert guidance."
      features={[
        "Startup toolkit & resources",
        "Mentor network access",
        "Funding & pitch guidance"
      ]}
      flipped={flippedCard === 'entrepreneur'}
      onFlip={() => setFlippedCard(flippedCard === 'entrepreneur' ? null : 'entrepreneur')}
    />
  );
}
```

### Customization

**Colors:** Edit the `colors` object in `CardStack.tsx` (lines 18-52)

**Stack Configuration:** Modify `stackCards` array in `CardStack.tsx` (lines 55-63)

**Background Effects:** Adjust nebula gradients in `App.tsx` (lines 17-64)

## 🎨 Color Reference

### Red Theme (Entrepreneur)
- Border: `#FF3333`
- Glow: `rgba(255, 51, 51, 1)`
- Title: `#F43F5E`
- Background: `linear-gradient(145deg, rgba(40, 15, 20, 1) 0%, rgba(25, 10, 15, 1) 50%, rgba(15, 8, 12, 1) 100%)`

### Blue Theme (Career)
- Border: `#00D9FF`
- Glow: `rgba(0, 217, 255, 1)`
- Title: `#38BDF8`
- Background: `linear-gradient(145deg, rgba(15, 25, 40, 1) 0%, rgba(10, 18, 30, 1) 50%, rgba(5, 12, 22, 1) 100%)`

## 🔧 Configuration

### TypeScript
Project uses TypeScript for type safety. Configuration in `tsconfig.json`.

### Tailwind CSS v4
Styles are handled by Tailwind CSS v4. Global styles in `src/styles/globals.css`.

### Vite
Fast build tool configuration in `vite.config.ts`.

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

## 💡 Tips

- **Performance:** GPU acceleration is enabled by default with `translate3d(0, 0, 0)`
- **Accessibility:** Add ARIA labels if needed for screen readers
- **SEO:** Component is purely visual, wrap in semantic HTML as needed

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

For issues or questions, refer to the source files or React/Motion documentation.

---

**Built with ❤️ using React, Motion, and Tailwind CSS**
