import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from './Icon';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Icon> = {
  title: '01. Primitives/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'muted', 'danger'],
    },
    iconStyle: {
      control: { type: 'select' },
      options: ['outline', 'solid'],
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
      <Icon {...args} />
    </StoryWrapper>
  ),
  args: {
    name: 'Home',
    variant: 'default',
    iconStyle: 'outline',
  },
};

// Popular Icons showcase
export const PopularIcons: Story = {
  render: () => {
    const popularIcons: IconName[] = [
      'Home',
      'User',
      'Cog6Tooth',
      'MagnifyingGlass',
      'Bell',
      'Envelope',
      'Calendar',
      'Document',
      'Folder',
      'ChartBar',
      'LockClosed',
      'Trash',
      'PlusCircle',
      'CheckCircle',
      'ArrowLeft',
      'ArrowRight',
      'ChevronDown',
      'ChevronUp',
      'Heart',
      'Star',
    ];

    return (
      <StoryWrapper>
        <div className='grid grid-cols-5 gap-4 p-4'>
          {popularIcons.map(iconName => (
            <div key={iconName} className='flex flex-col items-center gap-2'>
              <Icon name={iconName} size='lg' />
              <span className='text-xs text-center'>{iconName}</span>
            </div>
          ))}
        </div>
      </StoryWrapper>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2 items-center'>
          <Icon name='Star' variant='default' />
          <Icon name='Star' variant='primary' />
          <Icon name='Star' variant='secondary' />
          <Icon name='Star' variant='muted' />
          <Icon name='Star' variant='danger' />
        </div>
        <div className='flex gap-2 items-center'>
          <Icon name='Heart' size='sm' />
          <Icon name='Heart' size='md' />
          <Icon name='Heart' size='lg' />
          <Icon name='Heart' size='xl' />
        </div>
        <div className='flex gap-2 items-center'>
          <Icon name='Home' iconStyle='outline' />
          <Icon name='Home' iconStyle='solid' />
        </div>
        <div className='flex gap-2 items-center'>
          <Icon name='Bell' disabled />
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
      componentName='Icon'
      surfaceExample={
        <>
          <Icon name='User' size='sm' />
          <Icon name='User' />
        </>
      }
    >
      <Icon name='Home' variant='default' />
      <Icon name='Home' variant='primary' />
      <Icon name='Home' variant='secondary' />
      <Icon name='Home' variant='muted' />
      <Icon name='Home' variant='danger' />
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Icon component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
