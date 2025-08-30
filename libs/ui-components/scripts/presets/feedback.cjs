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
  }
};

module.exports = { FEEDBACK };