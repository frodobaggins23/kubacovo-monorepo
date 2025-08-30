import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Textarea> = {
  title: '03. Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <Textarea {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    placeholder: 'Enter your message...',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Variants</label>
          <div className='flex flex-col gap-2'>
            <Textarea variant='default' placeholder='Default variant' />
            <Textarea variant='error' placeholder='Error variant' />
            <Textarea variant='success' placeholder='Success variant' />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Sizes</label>
          <div className='flex flex-col gap-2'>
            <Textarea size='sm' placeholder='Small size (min-height: 60px)' />
            <Textarea size='md' placeholder='Medium size (min-height: 80px)' />
            <Textarea size='lg' placeholder='Large size (min-height: 100px)' />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>States</label>
          <div className='flex flex-col gap-2'>
            <Textarea placeholder='Normal textarea' />
            <Textarea disabled placeholder='Disabled textarea' />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Error Messages showcase
export const ErrorMessages: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Error Messages</label>
          <div className='flex flex-col gap-4'>
            <Textarea
              placeholder='Enter your message'
              errorMessage='This field is required'
            />
            <Textarea
              placeholder='Enter description'
              value='Too short'
              errorMessage='Description must be at least 10 characters long'
            />
            <Textarea
              size='sm'
              placeholder='Small textarea'
              errorMessage='Small error message'
            />
            <Textarea
              size='lg'
              placeholder='Large textarea'
              errorMessage='Large error message'
            />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Examples of Textarea components with error messages. Error messages automatically set the variant to error and display below the textarea.',
      },
    },
  },
};

// Helper Text showcase
export const HelperText: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Helper Text</label>
          <div className='flex flex-col gap-4'>
            <Textarea
              placeholder='Write your feedback...'
              helperText='Please be as specific as possible (max 500 characters)'
            />
            <Textarea
              placeholder='Enter bio'
              helperText='This will be visible on your public profile'
            />
            <Textarea
              size='sm'
              placeholder='Small textarea'
              helperText='Small helper text'
            />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Examples of Textarea components with helper text. Helper text provides additional guidance to users.',
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
