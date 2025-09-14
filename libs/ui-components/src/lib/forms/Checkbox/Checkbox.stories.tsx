import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { FormField } from '../FormField/FormField';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Checkbox> = {
  title: '03. Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Checkbox component with built-in label support. Use with FormField for error handling and help text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the checkbox',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Visual variant of the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <div className='max-w-md'>
        <Checkbox {...args} />
      </div>
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    label: 'I agree to the terms and conditions',
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
            <Checkbox variant='default' label='Default checkbox' />
            <Checkbox variant='error' label='Error checkbox' />
            <Checkbox variant='success' label='Success checkbox' />
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
            <Checkbox size='sm' label='Small checkbox' />
            <Checkbox size='md' label='Medium checkbox' />
            <Checkbox size='lg' label='Large checkbox' />
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
            <Checkbox label='Normal checkbox' />
            <Checkbox checked label='Checked checkbox' />
            <Checkbox disabled label='Disabled checkbox' />
            <Checkbox disabled checked label='Disabled checked checkbox' />
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
          <FormField helpText='Check this box to receive email notifications'>
            <Checkbox label='Email notifications' />
          </FormField>

          <FormField error='You must accept the terms to continue'>
            <Checkbox label='I agree to the terms and conditions' />
          </FormField>

          <FormField required helpText='This is required for account creation'>
            <Checkbox label='I confirm I am over 18 years old' />
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
          'Examples showing Checkbox used with FormField wrapper. FormField handles error messages, help text, and required field indicators.',
      },
    },
  },
};

export const CustomLabels: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Custom Label Layouts
          </h3>
          <p className='text-xs text-ui-text-secondary mb-4'>
            For complex labels, use manual label wrapping instead of the label
            prop.
          </p>
        </div>

        <div className='space-y-4'>
          <label className='flex items-start gap-3 cursor-pointer'>
            <Checkbox className='mt-1' />
            <div>
              <div className='text-sm font-medium text-ui-text-primary'>
                Marketing emails
              </div>
              <div className='text-xs text-ui-text-secondary'>
                Receive updates about new features and promotions
              </div>
            </div>
          </label>

          <label className='flex items-center gap-3 cursor-pointer'>
            <Checkbox />
            <span className='text-sm text-ui-text-primary'>
              I accept the{' '}
              <a href='#' className='text-ui-primary underline'>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href='#' className='text-ui-primary underline'>
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'For complex labels with HTML formatting or multiple lines, use manual label wrapping instead of the built-in label prop.',
      },
    },
  },
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Checkbox'
      surfaceExample={
        <>
          <Checkbox size='sm' label='Small on surface' />
          <Checkbox label='Default on surface' />
        </>
      }
    >
      <Checkbox variant='default' label='Default' />
      <Checkbox variant='error' label='Error' />
      <Checkbox variant='success' label='Success' />
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Checkbox component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
