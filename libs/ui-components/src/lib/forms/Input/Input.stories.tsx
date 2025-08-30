import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Input> = {
  title: '03. Forms/Input',
  component: Input,
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
      <Input {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    placeholder: 'Enter text...',
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
            <Input variant='default' placeholder='Default variant' />
            <Input variant='error' placeholder='Error variant' />
            <Input variant='success' placeholder='Success variant' />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Sizes</label>
          <div className='flex flex-col gap-2'>
            <Input size='sm' placeholder='Small size' />
            <Input size='md' placeholder='Medium size' />
            <Input size='lg' placeholder='Large size' />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>States</label>
          <div className='flex flex-col gap-2'>
            <Input placeholder='Normal input' />
            <Input disabled placeholder='Disabled input' />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Input types demonstration
export const InputTypes: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Input Types</label>
          <div className='flex flex-col gap-2'>
            <Input type='text' placeholder='Text input' />
            <Input type='email' placeholder='Email input' />
            <Input type='password' placeholder='Password input' />
            <Input type='number' placeholder='Number input' />
            <Input type='tel' placeholder='Phone input' />
            <Input type='search' placeholder='Search input' />
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
            <Input
              placeholder='Enter email'
              errorMessage='This field is required'
            />
            <Input
              placeholder='Enter email'
              value='invalid-email'
              errorMessage='Please enter a valid email address'
            />
            <Input
              size='sm'
              placeholder='Small input'
              errorMessage='Small error message'
            />
            <Input
              size='lg'
              placeholder='Large input'
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
          'Examples of Input components with error messages. Error messages automatically set the variant to error and display below the input.',
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
            <Input
              placeholder='Enter password'
              type='password'
              helperText='Must be at least 8 characters long'
            />
            <Input
              placeholder='Enter username'
              helperText='Only letters, numbers, and underscores allowed'
            />
            <Input
              size='sm'
              placeholder='Small input'
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
          'Examples of Input components with helper text. Helper text provides additional guidance to users.',
      },
    },
  },
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Input'
      surfaceExample={
        <>
          <Input size='sm' placeholder='Small on surface' />
          <Input placeholder='Default on surface' />
        </>
      }
    >
      <Input variant='default' placeholder='Default' />
      <Input variant='error' placeholder='Error' />
      <Input variant='success' placeholder='Success' />
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Input component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
