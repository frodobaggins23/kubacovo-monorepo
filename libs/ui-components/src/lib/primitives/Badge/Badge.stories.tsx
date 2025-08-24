import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Badge> = {
  title: '1. Primitives/Badge',
  component: Badge,
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
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
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
      <Badge {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    children: 'Badge',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2 items-center'>
          <Badge variant='default'>Default</Badge>
          <Badge variant='primary'>Primary</Badge>
          <Badge variant='secondary'>Secondary</Badge>
          <Badge variant='success'>Success</Badge>
          <Badge variant='warning'>Warning</Badge>
          <Badge variant='danger'>Danger</Badge>
        </div>
        <div className='flex gap-2 items-center'>
          <Badge size='sm'>Small</Badge>
          <Badge size='md'>Medium</Badge>
          <Badge size='lg'>Large</Badge>
        </div>
        <div className='flex gap-2 items-center'>
          <Badge disabled>Disabled</Badge>
        </div>
      </div>
    </StoryWrapper>
  ),
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Badge'
      surfaceExample={
        <>
          <Badge size='sm'>Small on surface</Badge>
          <Badge>Default on surface</Badge>
        </>
      }
    >
      <Badge variant='default'>Default</Badge>
      <Badge variant='primary'>Primary</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='danger'>Danger</Badge>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how the Badge component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
