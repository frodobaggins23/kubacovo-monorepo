import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { FormField } from '../FormField/FormField';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Input> = {
  title: '03. Forms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Input component with built-in label support. Use with FormField for error handling and help text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the input',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Visual variant of the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'search'],
      description: 'HTML input type',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <div className='max-w-md'>
        <Input {...args} />
      </div>
    </StoryWrapper>
  ),
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email...',
    variant: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Visual Variants
          </h3>
          <div className='space-y-3'>
            <Input
              label='Default'
              variant='default'
              placeholder='Default variant'
            />
            <Input label='Error' variant='error' placeholder='Error variant' />
            <Input
              label='Success'
              variant='success'
              placeholder='Success variant'
            />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Sizes: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Sizes
          </h3>
          <div className='space-y-3'>
            <Input label='Small' size='sm' placeholder='Small size' />
            <Input label='Medium' size='md' placeholder='Medium size' />
            <Input label='Large' size='lg' placeholder='Large size' />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const States: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            States
          </h3>
          <div className='space-y-3'>
            <Input label='Normal' placeholder='Normal input' />
            <Input label='Disabled' disabled placeholder='Disabled input' />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const InputTypes: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Input Types
          </h3>
          <div className='space-y-3'>
            <Input label='Text' type='text' placeholder='Text input' />
            <Input label='Email' type='email' placeholder='Email input' />
            <Input
              label='Password'
              type='password'
              placeholder='Password input'
            />
            <Input label='Number' type='number' placeholder='Number input' />
            <Input label='Phone' type='tel' placeholder='Phone input' />
            <Input label='Search' type='search' placeholder='Search input' />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const WithFormField: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-6'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            With FormField Wrapper
          </h3>
          <p className='text-xs text-ui-text-secondary mb-4'>
            Use FormField wrapper for error handling and help text.
          </p>
        </div>

        <div className='space-y-4'>
          <FormField helpText="We'll use this to contact you">
            <Input label='Email' placeholder='Enter your email' />
          </FormField>

          <FormField error='Please enter a valid email address'>
            <Input
              label='Email'
              placeholder='Enter your email'
              defaultValue='invalid'
            />
          </FormField>

          <FormField required helpText='Must be at least 8 characters long'>
            <Input
              label='Password'
              type='password'
              placeholder='Enter password'
            />
          </FormField>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Examples showing Input used with FormField wrapper. FormField handles error messages, help text, and required field indicators.',
      },
    },
  },
};

export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Input'
      surfaceExample={
        <>
          <Input label='Small' size='sm' placeholder='Small input' />
          <Input label='Default' placeholder='Default input' />
        </>
      }
    >
      <Input label='Default' variant='default' placeholder='Default' />
      <Input label='Error' variant='error' placeholder='Error' />
      <Input label='Success' variant='success' placeholder='Success' />
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Input component theme demonstration. All inputs now include labels for better accessibility.',
      },
    },
  },
};
