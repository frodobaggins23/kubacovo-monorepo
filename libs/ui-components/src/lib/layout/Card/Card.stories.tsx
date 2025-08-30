import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Card> = {
  title: '02. Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['compact', 'normal', 'spacious'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
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
      <Card {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'default',
    children: 'Card content',
  },
};

// All variants and padding showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='flex flex-col gap-6 w-full max-w-4xl'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Visual Variants</label>
          <div className='flex gap-4 items-start'>
            <Card variant='default'>
              <h3 className='font-medium mb-2'>Default Card</h3>
              <p className='text-sm text-ui-text-secondary'>
                Standard card with subtle background and border.
              </p>
            </Card>
            <Card variant='outlined'>
              <h3 className='font-medium mb-2'>Outlined Card</h3>
              <p className='text-sm text-ui-text-secondary'>
                Prominent border with clean background.
              </p>
            </Card>
            <Card variant='elevated'>
              <h3 className='font-medium mb-2'>Elevated Card</h3>
              <p className='text-sm text-ui-text-secondary'>
                Raised appearance with shadow depth.
              </p>
            </Card>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Padding Variants</label>
          <div className='flex gap-4 items-start'>
            <Card padding='compact'>
              <h4 className='font-medium'>Compact</h4>
              <p className='text-xs text-ui-text-secondary mt-1'>
                Dense spacing for information-heavy layouts
              </p>
            </Card>
            <Card padding='normal'>
              <h4 className='font-medium'>Normal</h4>
              <p className='text-sm text-ui-text-secondary mt-1'>
                Standard comfortable spacing for most content
              </p>
            </Card>
            <Card padding='spacious'>
              <h4 className='font-medium'>Spacious</h4>
              <p className='text-base text-ui-text-secondary mt-2'>
                Generous breathing room for featured content
              </p>
            </Card>
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>States</label>
          <div className='flex gap-4 items-start'>
            <Card>
              <h4 className='font-medium'>Active Card</h4>
              <p className='text-sm text-ui-text-secondary mt-1'>
                Interactive and ready for use
              </p>
            </Card>
            <Card disabled>
              <h4 className='font-medium'>Disabled Card</h4>
              <p className='text-sm text-ui-text-secondary mt-1'>
                Non-interactive state
              </p>
            </Card>
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Grid Layout showcase - demonstrates responsive behavior
export const GridLayout: Story = {
  render: () => (
    <StoryWrapper>
      <div className='w-full max-w-6xl'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>
              Responsive Grid Layout
            </label>
            <p className='text-sm text-ui-text-secondary'>
              Cards adapt to container width while maintaining consistent
              internal spacing
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <Card variant='default' padding='normal'>
                <h3 className='font-medium mb-2'>Product Overview</h3>
                <p className='text-sm text-ui-text-secondary mb-3'>
                  Comprehensive analysis of our latest product features and
                  market performance.
                </p>
                <div className='text-xs text-ui-text-secondary'>
                  Updated 2 hours ago
                </div>
              </Card>
              <Card variant='outlined' padding='compact'>
                <h3 className='font-medium mb-1'>Quick Stats</h3>
                <div className='space-y-1 text-sm'>
                  <div className='flex justify-between'>
                    <span>Users:</span>
                    <span className='font-medium'>1,234</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Growth:</span>
                    <span className='font-medium text-ui-success'>+12%</span>
                  </div>
                </div>
              </Card>
              <Card variant='elevated' padding='spacious'>
                <h3 className='font-medium mb-3'>Featured Article</h3>
                <p className='text-sm text-ui-text-secondary mb-4'>
                  Deep dive into the latest industry trends and how they impact
                  our business strategy.
                </p>
                <button className='text-sm text-ui-primary font-medium'>
                  Read More →
                </button>
              </Card>
              <Card variant='default' padding='normal'>
                <h3 className='font-medium mb-2'>Team Updates</h3>
                <p className='text-sm text-ui-text-secondary'>
                  Latest news and announcements from across all departments.
                </p>
              </Card>
              <Card variant='outlined' padding='normal'>
                <h3 className='font-medium mb-2'>Resource Center</h3>
                <p className='text-sm text-ui-text-secondary'>
                  Access documentation, guides, and training materials.
                </p>
              </Card>
              <Card variant='elevated' padding='compact'>
                <h3 className='font-medium mb-1'>Alerts</h3>
                <div className='text-sm'>
                  <div className='text-ui-warning mb-1'>
                    System maintenance scheduled
                  </div>
                  <div className='text-xs text-ui-text-secondary'>
                    Tonight at 11 PM EST
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Cards in responsive grid layouts adapt their width to the container while maintaining consistent internal spacing based on their padding variant. This demonstrates the flexibility of the padding-based sizing approach.',
      },
    },
  },
};

// Theme demonstration story
export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Card'
      surfaceExample={
        <>
          <Card padding='compact'>Compact on surface</Card>
          <Card>Normal on surface</Card>
        </>
      }
    >
      <Card variant='default'>Default</Card>
      <Card variant='outlined'>Outlined</Card>
      <Card variant='elevated'>Elevated</Card>
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates how the Card component adapts to different themes. Switch between Light, Dark, and System themes using the toolbar control above.',
      },
    },
  },
};
