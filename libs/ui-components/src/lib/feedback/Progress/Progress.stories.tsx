import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Progress> = {
  title: '04. Feedback/Progress',
  component: Progress,
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
      options: ['default', 'success', 'warning', 'error'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    showPercentage: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <div className='w-80'>
        <Progress {...args} />
      </div>
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    value: 75,
    showPercentage: false,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-6 w-80'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-ui-foreground'>Variants</h3>
          <Progress variant='default' value={75} />
          <Progress variant='success' value={100} />
          <Progress variant='warning' value={45} />
          <Progress variant='error' value={25} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-ui-foreground'>Sizes</h3>
          <Progress size='sm' value={60} />
          <Progress size='md' value={60} />
          <Progress size='lg' value={60} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-ui-foreground'>
            With Percentage Labels
          </h3>
          <Progress value={75} showPercentage />
          <Progress variant='success' value={100} showPercentage />
          <Progress size='sm' value={45} showPercentage />
          <Progress size='md' value={60} showPercentage />
          <Progress size='lg' value={80} showPercentage />
        </div>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-ui-foreground'>Disabled</h3>
          <Progress value={50} disabled />
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
      componentName='Progress'
      surfaceExample={
        <div className='space-y-2 w-full'>
          <Progress size='sm' value={40} showPercentage />
          <Progress value={70} showPercentage />
        </div>
      }
    >
      <div className='space-y-3 w-full'>
        <Progress variant='default' value={75} />
        <Progress variant='success' value={100} />
        <Progress variant='warning' value={45} />
        <Progress variant='error' value={25} />
      </div>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Progress component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
