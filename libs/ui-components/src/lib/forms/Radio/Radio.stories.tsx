import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Radio> = {
  title: '03. Forms/Radio',
  component: Radio,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <Radio {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
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
            <label className='flex items-center gap-2'>
              <Radio variant='default' name='variant-demo' />
              <span>Default radio</span>
            </label>
            <label className='flex items-center gap-2'>
              <Radio variant='error' name='variant-demo' />
              <span>Error radio</span>
            </label>
            <label className='flex items-center gap-2'>
              <Radio variant='success' name='variant-demo' />
              <span>Success radio</span>
            </label>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Sizes</label>
          <div className='flex flex-col gap-2'>
            <label className='flex items-center gap-2'>
              <Radio size='sm' name='size-demo' />
              <span>Small radio</span>
            </label>
            <label className='flex items-center gap-2'>
              <Radio size='md' name='size-demo' />
              <span>Medium radio</span>
            </label>
            <label className='flex items-center gap-2'>
              <Radio size='lg' name='size-demo' />
              <span>Large radio</span>
            </label>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>States</label>
          <div className='flex flex-col gap-2'>
            <label className='flex items-center gap-2'>
              <Radio name='state-demo' />
              <span>Normal radio</span>
            </label>
            <label className='flex items-center gap-2'>
              <Radio disabled name='state-demo' />
              <span>Disabled radio</span>
            </label>
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
      componentName='Radio'
      surfaceExample={
        <>
          <label className='flex items-center gap-2'>
            <Radio size='sm' name='surface-demo' />
            <span>Small on surface</span>
          </label>
          <label className='flex items-center gap-2'>
            <Radio name='surface-demo' />
            <span>Default on surface</span>
          </label>
        </>
      }
    >
      <label className='flex items-center gap-2'>
        <Radio variant='default' name='theme-demo' />
        <span>Default</span>
      </label>
      <label className='flex items-center gap-2'>
        <Radio variant='error' name='theme-demo' />
        <span>Error</span>
      </label>
      <label className='flex items-center gap-2'>
        <Radio variant='success' name='theme-demo' />
        <span>Success</span>
      </label>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Radio component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
