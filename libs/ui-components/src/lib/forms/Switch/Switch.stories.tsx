import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Switch } from './Switch';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Switch> = {
  title: '03. Forms/Switch',
  component: Switch,
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
    checked: {
      control: { type: 'boolean' },
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
  render: function DefaultStory(args) {
    const [checked, setChecked] = useState(args.checked ?? false);

    // Sync local state with Storybook controls
    useEffect(() => {
      setChecked(args.checked ?? false);
    }, [args.checked]);

    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
    };

    return (
      <StoryWrapper>
        <Switch {...args} checked={checked} onChange={handleChange} />
      </StoryWrapper>
    );
  },
  args: {
    variant: 'default',
    label: 'Enable notifications',
    checked: false,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: function AllVariantsStory() {
    const [states, setStates] = useState({
      default: true,
      success: true,
      warning: false,
      error: false,
      small: true,
      medium: false,
      large: true,
      disabled: false,
    });

    const updateState = (key: string) => (checked: boolean) => {
      setStates(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <StoryWrapper>
        <div className='flex flex-col gap-6'>
          <div className='space-y-3'>
            <h3 className='text-sm font-medium text-ui-foreground'>Variants</h3>
            <div className='space-y-2 grid grid-cols-4 gap-1'>
              <Switch
                variant='default'
                checked={states.default}
                onChange={updateState('default')}
                label='Default variant'
              />
              <Switch
                variant='success'
                checked={states.success}
                onChange={updateState('success')}
                label='Success variant'
              />
              <Switch
                variant='warning'
                checked={states.warning}
                onChange={updateState('warning')}
                label='Warning variant'
              />
              <Switch
                variant='error'
                checked={states.error}
                onChange={updateState('error')}
                label='Error variant'
              />
            </div>
          </div>
          <div className='space-y-3'>
            <h3 className='text-sm font-medium text-ui-foreground'>Sizes</h3>
            <div className='space-y-2 grid grid-cols-3 gap-1'>
              <Switch
                size='sm'
                checked={states.small}
                onChange={updateState('small')}
                label='Small switch'
              />
              <Switch
                size='md'
                checked={states.medium}
                onChange={updateState('medium')}
                label='Medium switch'
              />
              <Switch
                size='lg'
                checked={states.large}
                onChange={updateState('large')}
                label='Large switch'
              />
            </div>
          </div>
          <div className='space-y-3 '>
            <h3 className='text-sm font-medium text-ui-foreground'>States</h3>
            <div className='space-y-2 grid grid-cols-3 gap-1'>
              <Switch
                checked={states.disabled}
                onChange={updateState('disabled')}
                label='Normal switch'
              />
              <Switch disabled checked={true} label='Disabled (on)' />
              <Switch disabled checked={false} label='Disabled (off)' />
            </div>
          </div>
          <div className='space-y-3 '>
            <h3 className='text-sm font-medium text-ui-foreground'>
              Without Labels
            </h3>
            <div className='flex gap-3 items-center grid grid-cols-3 gap-1'>
              <Switch
                checked={states.default}
                onChange={updateState('default')}
              />
              <Switch
                variant='success'
                checked={states.success}
                onChange={updateState('success')}
              />
              <Switch
                size='sm'
                checked={states.small}
                onChange={updateState('small')}
              />
            </div>
          </div>
        </div>
      </StoryWrapper>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: function ThemeShowcaseStory() {
    const [themeStates, setThemeStates] = useState({
      surface1: true,
      surface2: false,
      main1: true,
      main2: true,
      main3: false,
      main4: false,
    });

    const updateThemeState = (key: string) => (checked: boolean) => {
      setThemeStates(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <ThemeShowcaseWrapper
        componentName='Switch'
        surfaceExample={
          <div className='space-y-2'>
            <Switch
              size='sm'
              checked={themeStates.surface1}
              onChange={updateThemeState('surface1')}
              label='Small on surface'
            />
            <Switch
              checked={themeStates.surface2}
              onChange={updateThemeState('surface2')}
              label='Default on surface'
            />
          </div>
        }
      >
        <div className='space-y-3 grid grid-cols-4 gap-1'>
          <Switch
            variant='default'
            checked={themeStates.main1}
            onChange={updateThemeState('main1')}
            label='Default'
          />
          <Switch
            variant='success'
            checked={themeStates.main2}
            onChange={updateThemeState('main2')}
            label='Success'
          />
          <Switch
            variant='warning'
            checked={themeStates.main3}
            onChange={updateThemeState('main3')}
            label='Warning'
          />
          <Switch
            variant='error'
            checked={themeStates.main4}
            onChange={updateThemeState('main4')}
            label='Error'
          />
        </div>
      </ThemeShowcaseWrapper>
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Switch component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
