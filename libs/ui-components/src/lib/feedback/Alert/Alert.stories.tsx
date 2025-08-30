import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Alert> = {
  title: '04. Feedback/Alert',
  component: Alert,
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
      options: ['info', 'success', 'warning', 'error'],
    },
    showIcon: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <Alert {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'info',
    children: 'This is an alert message',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Alert Variants</label>
          <div className='flex flex-col gap-2'>
            <Alert variant='info'>
              This is an info alert with useful information.
            </Alert>
            <Alert variant='success'>
              Success! Your action was completed successfully.
            </Alert>
            <Alert variant='warning'>
              Warning: Please review your settings.
            </Alert>
            <Alert variant='error'>
              Error: Something went wrong. Please try again.
            </Alert>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Sizes</label>
          <div className='flex flex-col gap-2'>
            <Alert size='sm'>Small alert message</Alert>
            <Alert size='md'>Medium alert message</Alert>
            <Alert size='lg'>Large alert message</Alert>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Without Icons</label>
          <div className='flex flex-col gap-2'>
            <Alert showIcon={false} variant='info'>
              Alert without icon
            </Alert>
            <Alert showIcon={false} variant='warning'>
              Warning without icon
            </Alert>
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Alert'
      surfaceExample={
        <>
          <Alert size='sm'>Small on surface</Alert>
          <Alert>Default on surface</Alert>
        </>
      }
    >
      <Alert variant='info'>Info alert message</Alert>
      <Alert variant='success'>Success alert message</Alert>
      <Alert variant='warning'>Warning alert message</Alert>
      <Alert variant='error'>Error alert message</Alert>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Alert component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
