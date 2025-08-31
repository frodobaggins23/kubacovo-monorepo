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
    label: {
      control: { type: 'text' },
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
    label: 'Default checkbox with label prop',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>
            Variants (with label prop)
          </label>
          <div className='flex flex-col gap-2'>
            <Checkbox variant='default' label='Default checkbox' />
            <Checkbox variant='error' label='Error checkbox' />
            <Checkbox variant='success' label='Success checkbox' />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Sizes (with label prop)</label>
          <div className='flex flex-col gap-2'>
            <Checkbox size='sm' label='Small checkbox' />
            <Checkbox size='md' label='Medium checkbox' />
            <Checkbox size='lg' label='Large checkbox' />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>
            States (with label prop)
          </label>
          <div className='flex flex-col gap-2'>
            <Checkbox label='Normal checkbox' />
            <Checkbox disabled label='Disabled checkbox' />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>
            Manual Label Wrapping (for complex layouts)
          </label>
          <div className='flex flex-col gap-2'>
            <label className='flex items-center gap-2'>
              <Checkbox />
              <span>
                Manual label with <strong>HTML formatting</strong>
              </span>
            </label>
            <label className='flex items-center gap-2'>
              <Checkbox />
              <div>
                <div className='text-sm font-medium'>Primary text</div>
                <div className='text-xs text-ui-text-secondary'>
                  Secondary description
                </div>
              </div>
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
          <Checkbox size='sm' label='Small on surface' />
          <Checkbox label='Default on surface' />
        </>
      }
    >
      <Checkbox variant='default' label='Default' />
      <Checkbox variant='error' label='Error' />
      <Checkbox variant='success' label='Success' />
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
