import React from 'react';

// Form component props interface for type safety
interface FormComponentProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  label?: string;
  [key: string]: any;
}

export interface FormFieldProps {
  children: React.ReactElement<FormComponentProps>;
  error?: string;
  helpText?: string;
  required?: boolean;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  error,
  helpText,
  required = false,
  className = '',
}) => {
  const errorId = React.useId();
  const helperId = React.useId();

  // Build aria-describedby for the child component
  let describedBy = undefined;
  if (error) {
    describedBy = errorId;
  } else if (helpText) {
    describedBy = helperId;
  }

  // Clone the child element and add form field context
  const enhancedChild = React.cloneElement(children, {
    variant: error ? 'error' : children.props.variant,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': describedBy,
    'aria-required': required ? 'true' : undefined,
  } as Partial<FormComponentProps>);

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  // Determine text size based on child component size
  const childSize = children.props.size || 'md';
  const textSize =
    textSizeClasses[childSize as keyof typeof textSizeClasses] ||
    textSizeClasses.md;

  return (
    <div className={`w-full ${className}`}>
      {enhancedChild}
      {error && (
        <p
          id={errorId}
          className={`mt-1 ${textSize} text-ui-danger`}
          role='alert'
        >
          {required && !children.props.label && (
            <span className='text-ui-danger'>* </span>
          )}
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={helperId} className={`mt-1 ${textSize} text-ui-text-secondary`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

FormField.displayName = 'FormField';
