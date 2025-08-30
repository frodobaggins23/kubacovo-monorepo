const LAYOUT = {
  Card: {
    folder: 'layout',
    htmlElement: 'div',
    defaultVariant: 'default',
    variants: ['default', 'outlined', 'elevated'],
    baseClasses: 'rounded-lg overflow-hidden',
    sizes: {
      sm: 'p-3',
      md: 'p-4', 
      lg: 'p-6'
    },
    variantClasses: {
      default: 'bg-ui-surface border border-ui-border',
      outlined: 'bg-ui-background border-2 border-ui-border',
      elevated: 'bg-ui-surface shadow-lg border border-ui-border/50'
    },
    sampleContent: 'Card content'
  }
};

module.exports = { LAYOUT };