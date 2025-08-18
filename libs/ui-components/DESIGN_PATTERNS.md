# UI Components Design Patterns

## Tailwind + Theme Integration

### Using Theme Colors with Tailwind

Our theme system provides semantic color tokens that work seamlessly with Tailwind utilities:

```tsx
// ✅ Good - Use theme-aware color classes
<button className="bg-ui-primary text-white hover:bg-ui-primary-hover">
  Primary Button
</button>

// ✅ Good - Use with Tailwind opacity utilities
<div className="bg-ui-primary/20 border border-ui-border">
  Semi-transparent background
</div>

// ❌ Avoid - Hard-coded colors that don't adapt to themes
<button className="bg-blue-500 text-white hover:bg-blue-600">
  Hard-coded colors
</button>
```

### Available Theme Color Classes

```css
/* Primary colors */
.bg-ui-primary           /* Main brand color */
.bg-ui-primary-hover     /* Hover state */
.text-ui-primary         /* Text variant */

/* Secondary colors */
.bg-ui-secondary         /* Secondary actions */
.bg-ui-secondary-hover   /* Hover state */

/* Danger colors */
.bg-ui-danger           /* Destructive actions */
.bg-ui-danger-hover     /* Hover state */

/* Surface colors */
.bg-ui-background       /* Main background */
.bg-ui-surface          /* Elevated surfaces */
.border-ui-border       /* Borders and dividers */

/* Text colors */
.text-ui-text-primary   /* Primary text */
.text-ui-text-secondary /* Secondary text */

/* Focus rings */
.focus:ring-ui-primary/30    /* Accessible focus states */
.focus:ring-ui-secondary/30
.focus:ring-ui-danger/30
```

### Standard Component Patterns

#### Base Component Structure

```tsx
interface BaseComponentProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: string; // Component-specific variants
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Component({
  size = 'md',
  variant = 'default',
  disabled = false,
  className = '',
  children,
  ...props
}: BaseComponentProps & React.HTMLAttributes<HTMLElement>) {
  const baseClasses = 'base-styles-here';
  const sizeClasses = {
    sm: 'size-small-styles',
    md: 'size-medium-styles',
    lg: 'size-large-styles',
  };
  const variantClasses = {
    default: 'default-variant-styles',
    // ... other variants
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <element className={classes} {...props}>
      {children}
    </element>
  );
}
```

#### Responsive Design Patterns

```tsx
// ✅ Use Tailwind's responsive prefixes with theme colors
<div className="p-4 md:p-6 lg:p-8 bg-ui-surface border border-ui-border">
  <h2 className="text-lg md:text-xl lg:text-2xl text-ui-text-primary">
    Responsive Typography
  </h2>
</div>

// ✅ Responsive layout with consistent spacing
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Grid items */}
</div>
```

#### Focus States & Accessibility

```tsx
// ✅ Standard focus ring pattern
<button className="
  focus:outline-none
  focus:ring-2
  focus:ring-ui-primary/30
  focus:ring-offset-2
  disabled:opacity-50
  disabled:cursor-not-allowed
">
  Accessible Button
</button>

// ✅ Interactive states with theme colors
<button className="
  bg-ui-primary
  hover:bg-ui-primary-hover
  active:scale-95
  transition-all
  duration-200
">
  Interactive Button
</button>
```

### Animation & Transitions

Use Tailwind's built-in animation utilities with theme-aware colors:

```tsx
// ✅ Smooth transitions respecting user preferences
<div className="
  transition-colors
  duration-200
  ease-in-out
  hover:bg-ui-surface
">
  Smooth color transition
</div>

// ✅ Loading states
<div className="animate-pulse bg-ui-surface rounded-md h-4 w-3/4"></div>
<div className="animate-spin h-4 w-4 border-2 border-ui-primary border-t-transparent rounded-full"></div>
```

### Dark Mode Considerations

Our theme system automatically handles dark mode, but follow these patterns:

```tsx
// ✅ Theme colors adapt automatically
<div className="bg-ui-background text-ui-text-primary">
  Automatically adapts to light/dark themes
</div>

// ✅ Use theme-aware shadows (avoid hard shadows in dark mode)
<div className="shadow-sm"> {/* Tailwind shadows work well */}
  Card with adaptive shadow
</div>
```

### Component Composition Patterns

```tsx
// ✅ Compound components
export const Menu = {
  Root: MenuRoot,
  Item: MenuItem,
  Group: MenuGroup,
  Separator: MenuSeparator,
};

// Usage:
<Menu.Root>
  <Menu.Group>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Item>Item 2</Menu.Item>
  </Menu.Group>
  <Menu.Separator />
  <Menu.Item>Item 3</Menu.Item>
</Menu.Root>;
```

### Best Practices

1. **Always use theme color classes** instead of hard-coded colors
2. **Leverage Tailwind's spacing scale** (p-4, m-8, gap-6, etc.)
3. **Use semantic HTML elements** with appropriate ARIA attributes
4. **Include focus states** for all interactive elements
5. **Respect user motion preferences** with `transition-*` classes
6. **Test in both light and dark themes** during development
7. **Use consistent size scales** across all components

### Testing Theme Integration

```tsx
// Test component in different themes
import { render } from '@testing-library/react';
import { ThemeProvider } from '../providers/ThemeProvider';

// Test light theme
render(
  <ThemeProvider>
    <Component />
  </ThemeProvider>
);

// Test dark theme (simulate system preference)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});
```
