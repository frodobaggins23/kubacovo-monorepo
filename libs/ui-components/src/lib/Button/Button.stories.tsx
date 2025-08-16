import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// State variations
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='danger'>Danger</Button>
        <Button variant='outline'>Outline</Button>
      </div>
      <div className='flex gap-2 items-center'>
        <Button size='sm'>Small</Button>
        <Button size='md'>Medium</Button>
        <Button size='lg'>Large</Button>
      </div>
      <div className='flex gap-2'>
        <Button disabled>Disabled</Button>
        <Button variant='outline' disabled>
          Disabled Outline
        </Button>
      </div>
    </div>
  ),
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <div className='bg-ui-background text-ui-text-primary p-6 rounded-lg border border-ui-border'>
      <h3 className='text-lg font-semibold mb-4 text-ui-text-primary'>
        Theme-Aware Components
      </h3>
      <p className='text-ui-text-secondary mb-6'>
        Use the theme switcher in the toolbar above to see how components adapt
        to light and dark themes.
      </p>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2'>
          <Button variant='primary'>Primary Action</Button>
          <Button variant='secondary'>Secondary Action</Button>
          <Button variant='danger'>Delete Item</Button>
          <Button variant='outline'>Cancel</Button>
        </div>
        <div className='bg-ui-surface p-4 rounded border border-ui-border'>
          <p className='text-ui-text-secondary text-sm mb-2'>
            Surface background with border
          </p>
          <Button variant='outline' size='sm'>
            Small Outline Button
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how the Button component and related UI elements adapt to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
