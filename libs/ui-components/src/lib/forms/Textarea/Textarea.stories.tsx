import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { FormField } from '../FormField/FormField';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Textarea> = {
  title: '03. Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Textarea component with built-in label support. Use with FormField for error handling and help text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the textarea',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the textarea (affects padding and min-height)',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Visual variant of the textarea',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text lines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <div className='max-w-md'>
        <Textarea {...args} />
      </div>
    </StoryWrapper>
  ),
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
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
            <Textarea
              label='Default'
              variant='default'
              placeholder='Default variant'
            />
            <Textarea
              label='Error'
              variant='error'
              placeholder='Error variant'
            />
            <Textarea
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
            <Textarea
              label='Small'
              size='sm'
              placeholder='Small size (min-height: 60px)'
            />
            <Textarea
              label='Medium'
              size='md'
              placeholder='Medium size (min-height: 80px)'
            />
            <Textarea
              label='Large'
              size='lg'
              placeholder='Large size (min-height: 100px)'
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

export const States: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            States
          </h3>
          <div className='space-y-3'>
            <Textarea label='Normal' placeholder='Normal textarea' />
            <Textarea
              label='Disabled'
              disabled
              placeholder='Disabled textarea'
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
          <FormField helpText='Tell us about your experience (optional)'>
            <Textarea label='Feedback' placeholder='Share your thoughts...' />
          </FormField>

          <FormField error='Description must be at least 10 characters long'>
            <Textarea
              label='Bio'
              placeholder='About yourself...'
              defaultValue='Too short'
            />
          </FormField>

          <FormField
            required
            helpText='This will be visible on your public profile'
          >
            <Textarea
              label='Description'
              placeholder='Describe your project...'
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
          'Examples showing Textarea used with FormField wrapper. FormField handles error messages, help text, and required field indicators.',
      },
    },
  },
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Textarea'
      surfaceExample={
        <>
          <Textarea size='sm' placeholder='Small on surface' />
          <Textarea placeholder='Default on surface' />
        </>
      }
    >
      <Textarea variant='default' placeholder='Default' />
      <Textarea variant='error' placeholder='Error' />
      <Textarea variant='success' placeholder='Success' />
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Textarea component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
