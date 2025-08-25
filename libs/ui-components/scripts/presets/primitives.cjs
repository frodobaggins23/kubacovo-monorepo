const PRIMITIVES = {
  Button: {
    folder: 'primitives',
    htmlElement: 'button',
    defaultVariant: 'primary',
    variants: ['primary', 'secondary', 'danger', 'outline'],
    baseClasses: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    sizes: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    },
    variantClasses: {
      primary: 'bg-ui-primary text-white hover:bg-ui-primary-hover focus:ring-ui-primary/30',
      secondary: 'bg-ui-secondary/20 text-ui-text-primary hover:bg-ui-secondary/30 focus:ring-ui-secondary/30',
      danger: 'bg-ui-danger text-white hover:bg-ui-danger-hover focus:ring-ui-danger/30',
      outline: 'border border-ui-border bg-ui-background text-ui-text-primary hover:bg-ui-surface focus:ring-ui-primary/30'
    },
    sampleContent: 'Button'
  },
  Badge: {
    folder: 'primitives',
    htmlElement: 'span',
    defaultVariant: 'default',
    variants: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    baseClasses: 'inline-flex items-center justify-center rounded-full font-medium',
    sizes: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm', 
      lg: 'px-3 py-1.5 text-base'
    },
    variantClasses: {
      default: 'bg-ui-surface text-ui-text-primary border border-ui-border',
      primary: 'bg-ui-primary text-white',
      secondary: 'bg-ui-secondary/20 text-ui-text-primary',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      danger: 'bg-ui-danger text-white'
    },
    sampleContent: 'Badge'
  },
  Avatar: {
    folder: 'primitives',
    htmlElement: 'div',
    defaultVariant: 'default',
    variants: ['default', 'rounded'],
    baseClasses: 'inline-flex items-center justify-center bg-ui-secondary/20 text-ui-text-primary font-medium overflow-hidden border border-ui-border',
    sizes: {
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg'
    },
    variantClasses: {
      default: 'rounded-full',
      rounded: 'rounded-md'
    },
    sampleContent: 'JD'
  },
  Spinner: {
    folder: 'primitives',
    htmlElement: 'div',
    defaultVariant: 'default',
    variants: ['default', 'primary', 'secondary'],
    baseClasses: 'inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
    sizes: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8'
    },
    variantClasses: {
      default: 'text-ui-text-primary',
      primary: 'text-ui-primary',
      secondary: 'text-ui-secondary'
    },
    sampleContent: ''
  },
  Icon: {
    folder: 'primitives',
    htmlElement: 'span',
    defaultVariant: 'default',
    variants: ['default', 'primary', 'secondary', 'muted', 'danger'],
    baseClasses: 'inline-flex items-center justify-center',
    sizes: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    },
    variantClasses: {
      default: 'text-ui-text-primary',
      primary: 'text-ui-primary',
      secondary: 'text-ui-secondary',
      muted: 'text-ui-text-muted',
      danger: 'text-ui-danger'
    },
    sampleContent: '★'
  },
  Link: {
    folder: 'primitives',
    htmlElement: 'a',
    defaultVariant: 'default',
    variants: ['default', 'primary', 'muted'],
    baseClasses: 'inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ui-primary/30 focus:ring-offset-2',
    sizes: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    },
    variantClasses: {
      default: 'text-ui-primary hover:text-ui-primary-hover underline',
      primary: 'text-ui-primary hover:text-ui-primary-hover',
      muted: 'text-ui-text-secondary hover:text-ui-text-primary'
    },
    sampleContent: 'Link text'
  }
};

module.exports = { PRIMITIVES };