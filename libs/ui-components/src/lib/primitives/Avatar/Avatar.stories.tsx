import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Avatar> = {
  title: '1. Primitives/Avatar',
  component: Avatar,
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
      options: ['default', 'rounded'],
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
      <Avatar {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    children: 'JD',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2 items-center'>
          <Avatar variant='default'>JD</Avatar>
          <Avatar variant='rounded'>AM</Avatar>
        </div>
        <div className='flex gap-2 items-center'>
          <Avatar size='sm'>SM</Avatar>
          <Avatar size='md'>MD</Avatar>
          <Avatar size='lg'>LG</Avatar>
        </div>
        <div className='flex gap-2 items-center'>
          <Avatar disabled>DX</Avatar>
        </div>
      </div>
    </StoryWrapper>
  ),
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Avatar'
      surfaceExample={
        <>
          <Avatar size='sm'>SM</Avatar>
          <Avatar>DF</Avatar>
        </>
      }
    >
      <Avatar variant='default'>JD</Avatar>
      <Avatar variant='rounded'>AM</Avatar>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how the Avatar component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
