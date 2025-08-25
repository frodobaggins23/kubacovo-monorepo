import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Spinner> = {
  title: '1. Primitives/Spinner',
  component: Spinner,
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
      options: ['default', 'primary', 'secondary'],
    },
    animation: {
      control: { type: 'select' },
      options: ['spin', 'orbit', 'pulse', 'bounce'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <Spinner {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    label: 'Loading content',
    showLabel: true,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-6'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Animation Types
          </h3>
          <div className='flex gap-4 items-start'>
            <Spinner animation='spin' label='Spin' showLabel />
            <Spinner animation='orbit' label='Orbit' showLabel />
            <Spinner animation='pulse' label='Pulse' showLabel />
            <Spinner animation='bounce' label='Bounce' showLabel />
          </div>
        </div>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Variants
          </h3>
          <div className='flex gap-4 items-start'>
            <Spinner variant='default' label='Default' showLabel />
            <Spinner variant='primary' label='Primary' showLabel />
            <Spinner variant='secondary' label='Secondary' showLabel />
          </div>
        </div>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Sizes
          </h3>
          <div className='flex gap-4 items-start'>
            <Spinner size='sm' label='Small' showLabel />
            <Spinner size='md' label='Medium' showLabel />
            <Spinner size='lg' label='Large' showLabel />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Animation showcase story
export const AnimationShowcase: Story = {
  render: () => (
    <StoryWrapper>
      <div className='grid grid-cols-2 gap-8'>
        <div className='text-center'>
          <h3 className='text-lg font-medium text-ui-text-primary mb-4'>
            Classic Spin
          </h3>
          <p className='text-sm text-ui-text-secondary mb-4'>
            Traditional border spinner
          </p>
          <div className='flex gap-4 justify-center'>
            <Spinner
              animation='spin'
              size='sm'
              variant='primary'
              showLabel
              label='Small'
            />
            <Spinner
              animation='spin'
              size='md'
              variant='primary'
              showLabel
              label='Medium'
            />
            <Spinner
              animation='spin'
              size='lg'
              variant='primary'
              showLabel
              label='Large'
            />
          </div>
        </div>

        <div className='text-center'>
          <h3 className='text-lg font-medium text-ui-text-primary mb-4'>
            Orbit
          </h3>
          <p className='text-sm text-ui-text-secondary mb-4'>
            Dots orbiting around center
          </p>
          <div className='flex gap-4 justify-center'>
            <Spinner
              animation='orbit'
              size='sm'
              variant='primary'
              showLabel
              label='Small'
            />
            <Spinner
              animation='orbit'
              size='md'
              variant='primary'
              showLabel
              label='Medium'
            />
            <Spinner
              animation='orbit'
              size='lg'
              variant='primary'
              showLabel
              label='Large'
            />
          </div>
        </div>

        <div className='text-center'>
          <h3 className='text-lg font-medium text-ui-text-primary mb-4'>
            Pulse
          </h3>
          <p className='text-sm text-ui-text-secondary mb-4'>
            Concentric expanding circles
          </p>
          <div className='flex gap-4 justify-center'>
            <Spinner
              animation='pulse'
              size='sm'
              variant='primary'
              showLabel
              label='Small'
            />
            <Spinner
              animation='pulse'
              size='md'
              variant='primary'
              showLabel
              label='Medium'
            />
            <Spinner
              animation='pulse'
              size='lg'
              variant='primary'
              showLabel
              label='Large'
            />
          </div>
        </div>

        <div className='text-center'>
          <h3 className='text-lg font-medium text-ui-text-primary mb-4'>
            Bounce
          </h3>
          <p className='text-sm text-ui-text-secondary mb-4'>
            Sequential bouncing dots
          </p>
          <div className='flex gap-4 justify-center'>
            <Spinner
              animation='bounce'
              size='sm'
              variant='primary'
              showLabel
              label='Small'
            />
            <Spinner
              animation='bounce'
              size='md'
              variant='primary'
              showLabel
              label='Medium'
            />
            <Spinner
              animation='bounce'
              size='lg'
              variant='primary'
              showLabel
              label='Large'
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
          'Explore the different animation types available for the Spinner component. Each animation offers a unique visual style suitable for different design contexts.',
      },
    },
  },
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Spinner'
      surfaceExample={
        <>
          <Spinner size='sm' label='Small' showLabel />
          <Spinner label='Default' showLabel />
        </>
      }
    >
      <Spinner variant='default' label='Default' showLabel />
      <Spinner variant='primary' label='Primary' showLabel />
      <Spinner variant='secondary' label='Secondary' showLabel />
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Spinner component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
