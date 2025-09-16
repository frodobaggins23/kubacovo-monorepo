const FEEDBACK = {
  Alert: {
    folder: 'feedback',
    htmlElement: 'div',
    defaultVariant: 'info',
    variants: ['info', 'success', 'warning', 'error'],
    baseClasses: 'relative rounded-lg border px-4 py-3 text-sm [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-ui-foreground',
    sizes: {
      sm: 'px-3 py-2 text-xs',
      md: 'px-4 py-3 text-sm',
      lg: 'px-5 py-4 text-base'
    },
    variantClasses: {
      info: 'border-ui-info/20 bg-ui-info/10 text-ui-info [&>svg]:text-ui-info',
      success: 'border-ui-success/20 bg-ui-success/10 text-ui-success [&>svg]:text-ui-success',
      warning: 'border-ui-warning/20 bg-ui-warning/10 text-ui-warning [&>svg]:text-ui-warning',
      error: 'border-ui-danger/20 bg-ui-danger/10 text-ui-danger [&>svg]:text-ui-danger'
    },
    sampleContent: 'This is an alert message'
  },
  Progress: {
    folder: 'feedback',
    htmlElement: 'div',
    defaultVariant: 'default',
    variants: ['default', 'success', 'warning', 'error'],
    baseClasses: 'w-full bg-ui-border rounded-full overflow-hidden',
    sizes: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    },
    variantClasses: {
      default: '[&>div]:bg-ui-primary',
      success: '[&>div]:bg-ui-success',
      warning: '[&>div]:bg-ui-warning',
      error: '[&>div]:bg-ui-danger'
    },
    sampleContent: '75% complete'
  },
  Skeleton: {
    folder: 'feedback',
    htmlElement: 'div',
    defaultVariant: 'card',
    variants: ['page', 'list', 'table', 'card', 'form', 'profile', 'article', 'dashboard'],
    baseClasses: 'animate-pulse',
    sizes: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg'
    },
    variantClasses: {
      page: '',
      list: '',
      table: '',
      card: '',
      form: '',
      profile: '',
      article: '',
      dashboard: ''
    },
    sampleContent: ''
  }
};

module.exports = { FEEDBACK };