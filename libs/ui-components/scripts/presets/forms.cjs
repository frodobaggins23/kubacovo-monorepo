const FORMS = {
  Input: {
    folder: 'forms',
    htmlElement: 'input',
    defaultVariant: 'default',
    variants: ['default', 'error', 'success'],
    baseClasses: 'block w-full rounded-md border placeholder-ui-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    sizes: {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-2 text-sm', 
      lg: 'px-4 py-3 text-lg'
    },
    variantClasses: {
      default: 'border-ui-border bg-ui-background text-ui-text-primary focus:border-ui-primary focus:ring-ui-primary/30',
      error: 'border-ui-danger bg-ui-background text-ui-text-primary focus:border-ui-danger focus:ring-ui-danger/30',
      success: 'border-ui-success bg-ui-background text-ui-success focus:border-ui-success focus:ring-ui-success/30'
    },
    sampleContent: 'Enter text...'
  },
  Textarea: {
    folder: 'forms',
    htmlElement: 'textarea',
    defaultVariant: 'default',
    variants: ['default', 'error', 'success'],
    baseClasses: 'block w-full rounded-md border placeholder-ui-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical',
    sizes: {
      sm: 'px-2 py-1 text-xs min-h-[60px]',
      md: 'px-3 py-2 text-sm min-h-[80px]', 
      lg: 'px-4 py-3 text-lg min-h-[100px]'
    },
    variantClasses: {
      default: 'border-ui-border bg-ui-background text-ui-text-primary focus:border-ui-primary focus:ring-ui-primary/30',
      error: 'border-ui-danger bg-ui-background text-ui-text-primary focus:border-ui-danger focus:ring-ui-danger/30',
      success: 'border-ui-success bg-ui-background text-ui-success focus:border-ui-success focus:ring-ui-success/30'
    },
    sampleContent: 'Enter your message...'
  },
  Checkbox: {
    folder: 'forms',
    htmlElement: 'input',
    defaultVariant: 'default',
    variants: ['default', 'error', 'success'],
    baseClasses: 'h-4 w-4 rounded border border-ui-border text-ui-primary focus:ring-2 focus:ring-ui-primary/30 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    sizes: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5'
    },
    variantClasses: {
      default: 'border-ui-border focus:border-ui-primary',
      error: 'border-ui-danger focus:border-ui-danger focus:ring-ui-danger/30',
      success: 'border-ui-success focus:border-ui-success focus:ring-ui-success/30'
    },
    sampleContent: 'Checkbox label'
  },
  Radio: {
    folder: 'forms',
    htmlElement: 'input',
    defaultVariant: 'default',
    variants: ['default', 'error', 'success'],
    baseClasses: 'h-4 w-4 rounded-full border border-ui-border text-ui-primary focus:ring-2 focus:ring-ui-primary/30 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    sizes: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5'
    },
    variantClasses: {
      default: 'border-ui-border focus:border-ui-primary',
      error: 'border-ui-danger focus:border-ui-danger focus:ring-ui-danger/30',
      success: 'border-ui-success focus:border-ui-success focus:ring-ui-success/30'
    },
    sampleContent: 'Radio option'
  },
  Switch: {
    folder: 'forms',
    htmlElement: 'button',
    defaultVariant: 'default',
    variants: ['default', 'success', 'warning', 'error'],
    baseClasses: 'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    sizes: {
      sm: 'h-4 w-7',
      md: 'h-5 w-9',
      lg: 'h-6 w-11'
    },
    variantClasses: {
      default: 'bg-ui-border focus:ring-ui-primary/30 data-[checked=true]:bg-ui-primary',
      success: 'bg-ui-border focus:ring-ui-success/30 data-[checked=true]:bg-ui-success',
      warning: 'bg-ui-border focus:ring-ui-warning/30 data-[checked=true]:bg-ui-warning',
      error: 'bg-ui-border focus:ring-ui-danger/30 data-[checked=true]:bg-ui-danger'
    },
    sampleContent: 'Toggle switch'
  }
};

module.exports = { FORMS };