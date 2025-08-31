import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { StoryWrapper } from '../../utils/StoryWrapper';

const meta: Meta<typeof Grid> = {
  title: '02. Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 'auto-fit', 'auto-fill'],
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    minItemWidth: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <div className='w-full max-w-4xl border-2 border-dashed border-ui-border/30 p-4'>
        <Grid {...args}>
          <div className='bg-ui-primary/20 text-ui-primary p-4 rounded'>
            Grid Item 1 - Responsive sizing based on minItemWidth
          </div>
          <div className='bg-ui-secondary/20 text-ui-secondary p-4 rounded'>
            Grid Item 2 - Auto-fit adjusts columns to container width
          </div>
          <div className='bg-ui-success/20 text-ui-success p-4 rounded'>
            Grid Item 3 - Gap property controls spacing between items
          </div>
          <div className='bg-ui-warning/20 text-ui-warning p-4 rounded'>
            Grid Item 4 - Resize browser to see responsive behavior
          </div>
        </Grid>
      </div>
    </StoryWrapper>
  ),
  args: {
    columns: 'auto-fit',
    gap: 'md',
    minItemWidth: '200px',
  },
};

// Layout behavior demonstration
export const LayoutBehavior: Story = {
  render: () => (
    <StoryWrapper>
      <div className='space-y-8 w-full max-w-4xl'>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <label className='text-sm font-medium'>Fixed Columns</label>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <span className='text-xs text-ui-text-secondary'>
                  2 Columns
                </span>
                <Grid columns={2} gap='sm'>
                  <div className='bg-ui-primary/20 p-4 rounded'>Item 1</div>
                  <div className='bg-ui-secondary/20 p-4 rounded'>Item 2</div>
                  <div className='bg-ui-success/20 p-4 rounded'>Item 3</div>
                  <div className='bg-ui-warning/20 p-4 rounded'>Item 4</div>
                </Grid>
              </div>
              <div className='space-y-2'>
                <span className='text-xs text-ui-text-secondary'>
                  3 Columns
                </span>
                <Grid columns={3} gap='sm'>
                  <div className='bg-ui-primary/20 p-4 rounded'>Item 1</div>
                  <div className='bg-ui-secondary/20 p-4 rounded'>Item 2</div>
                  <div className='bg-ui-success/20 p-4 rounded'>Item 3</div>
                  <div className='bg-ui-warning/20 p-4 rounded'>Item 4</div>
                  <div className='bg-ui-error/20 p-4 rounded'>Item 5</div>
                  <div className='bg-ui-primary/20 p-4 rounded'>Item 6</div>
                </Grid>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <label className='text-sm font-medium'>Auto-fit (responsive)</label>
            <div className='space-y-2'>
              <span className='text-xs text-ui-text-secondary'>
                Resize browser to see adaptation
              </span>
              <Grid columns='auto-fit' minItemWidth='150px' gap='md'>
                <div className='bg-ui-primary/20 p-4 rounded'>Responsive 1</div>
                <div className='bg-ui-secondary/20 p-4 rounded'>
                  Responsive 2
                </div>
                <div className='bg-ui-success/20 p-4 rounded'>Responsive 3</div>
                <div className='bg-ui-warning/20 p-4 rounded'>Responsive 4</div>
                <div className='bg-ui-error/20 p-4 rounded'>Responsive 5</div>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Responsive behavior story
export const ResponsiveBehavior: Story = {
  render: () => (
    <StoryWrapper>
      <div className='w-full max-w-6xl space-y-6'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Responsive Layout</label>
          <p className='text-sm text-ui-text-secondary'>
            Resize your browser to see how the layout adapts to different screen
            sizes
          </p>
        </div>
        <Grid
          columns='auto-fit'
          minItemWidth='200px'
          gap='md'
          className='md:gap-lg'
        >
          <div className='bg-ui-primary/20 p-4 rounded'>
            Responsive grid item
          </div>
          <div className='bg-ui-secondary/20 p-4 rounded'>
            Adapts to screen size
          </div>
          <div className='bg-ui-success/20 p-4 rounded'>
            Changes gap on larger screens
          </div>
          <div className='bg-ui-warning/20 p-4 rounded'>
            Maintains min item width
          </div>
        </Grid>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};
