import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Checkbox> = {
  title: '03. Forms/Checkbox',
  component: Checkbox,
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
      <Checkbox {...args} />
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
              <Checkbox variant='default' />
              <span>Default checkbox</span>
            </label>
            <label className='flex items-center gap-2'>
              <Checkbox variant='error' />
              <span>Error checkbox</span>
            </label>
            <label className='flex items-center gap-2'>
              <Checkbox variant='success' />
              <span>Success checkbox</span>
            </label>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Sizes</label>
          <div className='flex flex-col gap-2'>
            <label className='flex items-center gap-2'>
              <Checkbox size='sm' />
              <span>Small checkbox</span>
            </label>
            <label className='flex items-center gap-2'>
              <Checkbox size='md' />
              <span>Medium checkbox</span>
            </label>
            <label className='flex items-center gap-2'>
              <Checkbox size='lg' />
              <span>Large checkbox</span>
            </label>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>States</label>
          <div className='flex flex-col gap-2'>
            <label className='flex items-center gap-2'>
              <Checkbox />
              <span>Normal checkbox</span>
            </label>
            <label className='flex items-center gap-2'>
              <Checkbox disabled />
              <span>Disabled checkbox</span>
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
      componentName='Checkbox'
      surfaceExample={
        <>
          <label className='flex items-center gap-2'>
            <Checkbox size='sm' />
            <span>Small on surface</span>
          </label>
          <label className='flex items-center gap-2'>
            <Checkbox />
            <span>Default on surface</span>
          </label>
        </>
      }
    >
      <label className='flex items-center gap-2'>
        <Checkbox variant='default' />
        <span>Default</span>
      </label>
      <label className='flex items-center gap-2'>
        <Checkbox variant='error' />
        <span>Error</span>
      </label>
      <label className='flex items-center gap-2'>
        <Checkbox variant='success' />
        <span>Success</span>
      </label>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Checkbox component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
