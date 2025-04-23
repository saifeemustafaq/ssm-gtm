# **Design Specification Guide: Obsidian Bloom Theme**

**A Unified UI System Combining Amethyst & Obsidian with Emerald & Graphite**

---

## 1.0 Overview

The **Obsidian Bloom** theme is a high-contrast, dark UI system that merges the richness of **Amethyst purple tones** with the depth and vitality of **Emerald green**, unified over a base of **Obsidian black** and **Graphite gray**. The system leverages glassmorphism techniques to provide a sophisticated, modern interface that is visually immersive and functionally precise. This guide outlines the visual language, color palette, component styling, and effects specification for designers and developers implementing this theme.

---

## 2.0 Color System

### 2.1 Base Colors (Tailwind Configuration)

```typescript
// tailwind.config.ts
colors: {
  // Base Colors
  obsidian: '#0B0F19',
  graphite: '#1A1A1A',
  slate: '#1E293B',
  fog: '#E2E8F0',
  ash: '#94A3B8',
  
  // Primary Accents
  amethyst: '#8B5CF6',
  'deep-amethyst': '#6D28D9',
  emerald: '#10B981',
  'deep-emerald': '#047857',
  
  // Supporting Colors
  'icy-teal': '#67E8F9',
  'rose-quartz': '#F472B6',
  'neon-lime': '#A3E635',
  'silver-mist': '#F1F5F9',
}
```

### 2.2 Usage Guidelines

1. **Direct Utility Classes**
   ```jsx
   // Text colors
   <p className="text-amethyst">...</p>
   <p className="text-emerald">...</p>
   
   // Background colors
   <div className="bg-amethyst">...</div>
   <div className="bg-emerald">...</div>
   
   // Border colors
   <div className="border-rose-quartz">...</div>
   ```

2. **Opacity Modifiers**
   ```jsx
   // 50% opacity
   <div className="bg-amethyst/50">...</div>
   
   // 10% opacity
   <div className="bg-emerald/10">...</div>
   ```

3. **Hover States**
   ```jsx
   <button className="bg-amethyst hover:bg-deep-amethyst">...</button>
   ```

---

## 3.0 Typography

### 3.1 Font Configuration

```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'Outfit', 'Space Grotesk', 'sans-serif'],
}
```

### 3.2 Usage Examples

```jsx
// Headings
<h1 className="text-4xl font-semibold leading-tight">...</h1>
<h2 className="text-3xl font-semibold leading-tight">...</h2>
<h3 className="text-2xl font-semibold leading-tight">...</h3>

// Body Text
<p className="text-base leading-normal">...</p>
<p className="text-sm text-ash">...</p>
```

---

## 4.0 Glassmorphism Specification

### 4.1 Component Classes

```css
/* globals.css */
@layer components {
  .glass-panel {
    @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg;
  }
  
  .glass-light {
    @apply bg-white/10 backdrop-blur-sm;
  }
  
  .glass-medium {
    @apply bg-white/15 backdrop-blur-md;
  }
  
  .glass-dark {
    @apply bg-white/20 backdrop-blur-lg;
  }
}
```

### 4.2 Usage Examples

```jsx
<div className="glass-panel p-6">...</div>
<div className="glass-light p-4">...</div>
<div className="glass-medium p-4">...</div>
<div className="glass-dark p-4">...</div>
```

---

## 5.0 Component Design

### 5.1 Buttons

```css
/* globals.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 rounded-lg transition-colors bg-amethyst text-white hover:bg-deep-amethyst;
  }

  .btn-secondary {
    @apply px-4 py-2 rounded-lg transition-colors bg-emerald text-white hover:bg-deep-emerald;
  }
}
```

### 5.2 Cards

```jsx
<div className="glass-panel p-6">
  <h3 className="text-xl font-semibold text-fog">...</h3>
  <p className="mt-2 text-ash">...</p>
</div>
```

### 5.3 KPI Indicators

```css
/* globals.css */
@layer components {
  .kpi-indicator {
    @apply inline-flex items-center px-3 py-1 rounded-full text-sm font-medium;
  }

  .kpi-positive {
    @apply bg-emerald/10 text-emerald;
  }

  .kpi-negative {
    @apply bg-rose-quartz/10 text-rose-quartz;
  }

  .kpi-neutral {
    @apply bg-icy-teal/10 text-icy-teal;
  }
}
```

---

## 6.0 Important Guidelines

1. **Avoid Circular Dependencies**
   - Never create utility classes that reference themselves
   - Example of what NOT to do:
     ```css
     /* ❌ WRONG */
     .text-amethyst { @apply text-amethyst; }
     ```
   - Instead, use Tailwind's built-in utilities directly

2. **Color Usage**
   - Use Tailwind's color utilities directly
   - Leverage opacity modifiers for transparency
   - Use consistent color naming across components

3. **Component Structure**
   - Define reusable components in `@layer components`
   - Use semantic class names
   - Keep component styles modular and composable

4. **Responsive Design**
   - Use Tailwind's responsive prefixes
   - Example: `md:text-lg lg:text-xl`

5. **Dark Mode**
   - Use Tailwind's dark mode utilities
   - Example: `dark:bg-obsidian dark:text-fog`

---

## 7.0 Best Practices

1. **File Organization**
   - Keep color definitions in `tailwind.config.ts`
   - Define component styles in `globals.css`
   - Use `@layer` directives appropriately

2. **Naming Conventions**
   - Use kebab-case for class names
   - Be descriptive but concise
   - Follow Tailwind's naming patterns

3. **Performance**
   - Minimize custom CSS
   - Use Tailwind's utility classes when possible
   - Avoid unnecessary specificity

4. **Accessibility**
   - Maintain sufficient color contrast
   - Use semantic HTML elements
   - Include proper ARIA attributes when needed

---

## 8.0 Summary

|Property|Specification|
|---|---|
|Theme Name|Obsidian Bloom|
|Background Color|`#0B0F19`|
|Primary Accents|Amethyst `#8B5CF6`, Emerald `#10B981`|
|Secondary Support|Rose Quartz, Icy Teal, Neon Lime|
|Typography|Inter / Outfit / Space Grotesk|
|Border Radius|`16px`|
|Glassmorphism Blur|`12–20px` (background + blur combo)|
|Font Color (Main)|`#E2E8F0`|

