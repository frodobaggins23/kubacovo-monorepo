import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Link> = {
  title: '01. Primitives/Link',
  component: Link,
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
      options: ['default', 'primary', 'muted'],
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
      <Link {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    children: 'Link text',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2 items-center'>
          <Link variant='default'>Default</Link>
          <Link variant='primary'>Primary</Link>
          <Link variant='muted'>Muted</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <Link size='sm'>Small</Link>
          <Link size='md'>Medium</Link>
          <Link size='lg'>Large</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <Link disabled>Disabled</Link>
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
      componentName='Link'
      surfaceExample={
        <>
          <Link size='sm'>Small on surface</Link>
          <Link>Default on surface</Link>
        </>
      }
    >
      <Link variant='default'>Default</Link>
      <Link variant='primary'>Primary</Link>
      <Link variant='muted'>Muted</Link>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Link component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
