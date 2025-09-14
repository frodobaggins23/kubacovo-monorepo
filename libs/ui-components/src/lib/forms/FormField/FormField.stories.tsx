import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Checkbox } from '../Checkbox/Checkbox';
import { Radio } from '../Radio/Radio';

const meta: Meta<typeof FormField> = {
  title: '03. Forms/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'FormField wrapper component that provides error handling, help text, and accessibility features for form components through composition. Child components handle their own labels, while FormField manages form-level concerns.',
      },
    },
  },
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message to display (overrides helpText)',
    },
    helpText: {
      control: 'text',
      description: 'Help text to display below the field',
    },
    required: {
      control: 'boolean',
      description:
        'Whether the field is required (adds accessibility attributes)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the wrapper',
    },
    children: {
      table: {
        disable: true,
      },
      description: 'Form component to wrap (Input, Textarea, Checkbox, Radio)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    helpText: 'Enter your email address',
    children: <Input placeholder='Email' label='Email Address' />,
  },
};

export const WithError: Story = {
  args: {
    error: 'Please enter a valid email address',
    children: <Input placeholder='Email' label='Email Address' />,
  },
};

export const Required: Story = {
  args: {
    required: true,
    helpText: 'This field is required',
    children: <Input placeholder='Required field' label='Required Input' />,
  },
};

export const TextareaField: Story = {
  args: {
    helpText: 'Tell us about yourself (optional)',
    children: <Textarea placeholder='About you...' label='Bio' />,
  },
};

export const CheckboxField: Story = {
  args: {
    helpText: 'Check this box to agree to our terms',
    children: <Checkbox label='I agree to the terms and conditions' />,
  },
};

export const RadioField: Story = {
  args: {
    helpText: 'Select your preferred contact method',
    children: <Radio label='Email' name='contact' value='email' />,
  },
};

export const CompositionDemo: Story = {
  render: () => (
    <div className='max-w-md space-y-6'>
      <div>
        <h3 className='text-lg font-semibold text-ui-text-primary mb-4'>
          Form Composition Pattern
        </h3>
        <p className='text-sm text-ui-text-secondary mb-6'>
          FormField wraps form components to provide consistent error handling,
          help text, and accessibility.
        </p>
      </div>

      <div className='space-y-4'>
        <FormField required helpText="We'll use this to contact you">
          <Input label='Email Address' placeholder='john@example.com' />
        </FormField>

        <FormField helpText='Optional but helpful for personalization'>
          <Input label='Full Name' placeholder='John Doe' />
        </FormField>

        <FormField error='Password must be at least 8 characters'>
          <Input label='Password' type='password' placeholder='••••••••' />
        </FormField>

        <FormField helpText='Tell us about your interests (optional)'>
          <Textarea label='Bio' placeholder="I'm interested in..." />
        </FormField>

        <FormField required error='You must accept the terms to continue'>
          <Checkbox label='I agree to the terms and conditions' />
        </FormField>
      </div>
    </div>
  ),
};
