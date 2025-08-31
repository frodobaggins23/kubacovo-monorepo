import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { StoryWrapper } from '../../utils/StoryWrapper';

const meta: Meta<typeof Stack> = {
  title: '02. Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    wrap: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <div className='w-full max-w-4xl border-2 border-dashed border-ui-border/30 min-h-[400px]'>
        <Stack {...args} className='h-full'>
          <div className='bg-ui-primary/10 text-ui-primary px-4 py-2 rounded text-sm font-medium'>
            Item 1 (flexible)
          </div>
          <div className='bg-ui-secondary/10 text-ui-secondary px-3 py-6 rounded text-sm font-medium'>
            Item 2 (taller content)
          </div>
          <div className='bg-ui-success/10 text-ui-success px-6 py-1 rounded text-sm font-medium'>
            Item 3 (wider)
          </div>
          <div className='bg-ui-warning/10 text-ui-warning px-2 py-3 rounded text-sm font-medium'>
            Item 4
          </div>
          <div className='bg-ui-error/10 text-ui-error px-8 py-2 rounded text-sm font-medium'>
            Item 5 (extra wide content)
          </div>
        </Stack>
      </div>
    </StoryWrapper>
  ),
  args: {
    direction: 'row',
    gap: 'md',
    wrap: false,
    align: 'start',
    justify: 'start',
  },
};

// Direction comparison
export const DirectionShowcase: Story = {
  render: () => (
    <StoryWrapper>
      <div className='space-y-8 w-full max-w-4xl'>
        <h3 className='text-lg font-semibold'>Direction Comparison</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-3'>
            <span className='text-sm font-medium'>
              direction="column" (default)
            </span>
            <div className='border border-ui-border rounded p-4'>
              <Stack direction='column' gap='md'>
                <div className='bg-ui-primary/20 px-4 py-3 rounded'>
                  First item
                </div>
                <div className='bg-ui-secondary/20 px-4 py-3 rounded'>
                  Second item
                </div>
                <div className='bg-ui-success/20 px-4 py-3 rounded'>
                  Third item
                </div>
              </Stack>
            </div>
          </div>
          <div className='space-y-3'>
            <span className='text-sm font-medium'>direction="row"</span>
            <div className='border border-ui-border rounded p-4'>
              <Stack direction='row' gap='md'>
                <div className='bg-ui-primary/20 px-4 py-3 rounded'>
                  First item
                </div>
                <div className='bg-ui-secondary/20 px-4 py-3 rounded'>
                  Second item
                </div>
                <div className='bg-ui-success/20 px-4 py-3 rounded'>
                  Third item
                </div>
              </Stack>
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

// Gap variations showcase
export const GapShowcase: Story = {
  render: () => (
    <StoryWrapper>
      <div className='space-y-6 w-full max-w-4xl'>
        <h3 className='text-lg font-semibold'>Gap Spacing Variations</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(gapSize => (
            <div key={gapSize} className='space-y-2'>
              <span className='text-sm font-medium'>gap="{gapSize}"</span>
              <div className='border border-ui-border rounded p-3'>
                <Stack direction='row' gap={gapSize}>
                  <div className='bg-ui-primary/20 px-3 py-2 rounded'>A</div>
                  <div className='bg-ui-secondary/20 px-3 py-2 rounded'>B</div>
                  <div className='bg-ui-success/20 px-3 py-2 rounded'>C</div>
                </Stack>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Alignment and justification showcase
export const AlignmentShowcase: Story = {
  render: () => (
    <StoryWrapper>
      <div className='space-y-8 w-full max-w-6xl'>
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold'>
            Row Direction - Justify (main axis)
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>justify="start"</span>
              <div className='border border-ui-border rounded p-2 h-24'>
                <Stack
                  direction='row'
                  gap='sm'
                  justify='start'
                  className='h-full'
                >
                  <div className='bg-ui-primary/20 px-3 py-1 rounded'>A</div>
                  <div className='bg-ui-secondary/20 px-3 py-1 rounded'>B</div>
                </Stack>
              </div>
            </div>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>justify="center"</span>
              <div className='border border-ui-border rounded p-2 h-24'>
                <Stack
                  direction='row'
                  gap='sm'
                  justify='center'
                  className='h-full'
                >
                  <div className='bg-ui-primary/20 px-3 py-1 rounded'>A</div>
                  <div className='bg-ui-secondary/20 px-3 py-1 rounded'>B</div>
                </Stack>
              </div>
            </div>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>justify="between"</span>
              <div className='border border-ui-border rounded p-2 h-24'>
                <Stack
                  direction='row'
                  gap='sm'
                  justify='between'
                  className='h-full'
                >
                  <div className='bg-ui-primary/20 px-3 py-1 rounded'>A</div>
                  <div className='bg-ui-secondary/20 px-3 py-1 rounded'>B</div>
                </Stack>
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-semibold'>
            Row Direction - Align (cross axis)
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>align="start"</span>
              <div className='border border-ui-border rounded p-2 h-24'>
                <Stack
                  direction='row'
                  gap='sm'
                  align='start'
                  className='h-full'
                >
                  <div className='bg-ui-primary/20 px-2 py-1 rounded'>
                    Short
                  </div>
                  <div className='bg-ui-secondary/20 px-2 py-6 rounded'>
                    Tall content
                  </div>
                </Stack>
              </div>
            </div>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>align="center"</span>
              <div className='border border-ui-border rounded p-2 h-24'>
                <Stack
                  direction='row'
                  gap='sm'
                  align='center'
                  className='h-full'
                >
                  <div className='bg-ui-primary/20 px-2 py-1 rounded'>
                    Short
                  </div>
                  <div className='bg-ui-secondary/20 px-2 py-6 rounded'>
                    Tall content
                  </div>
                </Stack>
              </div>
            </div>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>align="stretch"</span>
              <div className='border border-ui-border rounded p-2 h-24'>
                <Stack
                  direction='row'
                  gap='sm'
                  align='stretch'
                  className='h-full'
                >
                  <div className='bg-ui-primary/20 px-2 py-1 rounded flex items-center'>
                    Stretched
                  </div>
                  <div className='bg-ui-secondary/20 px-2 py-1 rounded flex items-center'>
                    Both equal height
                  </div>
                </Stack>
              </div>
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

// Wrapping behavior showcase
export const WrappingShowcase: Story = {
  render: () => (
    <StoryWrapper>
      <div className='space-y-8 w-full max-w-4xl'>
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold'>Wrap Behavior Comparison</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>
                wrap={false} - No wrapping (default)
              </span>
              <div className='border border-ui-border rounded p-3 overflow-hidden'>
                <Stack direction='row' gap='sm' wrap={false}>
                  <div className='bg-ui-primary/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item One
                  </div>
                  <div className='bg-ui-secondary/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Two
                  </div>
                  <div className='bg-ui-success/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Three
                  </div>
                  <div className='bg-ui-warning/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Four
                  </div>
                  <div className='bg-ui-error/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Five
                  </div>
                </Stack>
              </div>
            </div>
            <div className='space-y-2'>
              <span className='text-sm font-medium'>
                wrap={true} - Items wrap to new lines
              </span>
              <div className='border border-ui-border rounded p-3'>
                <Stack direction='row' gap='sm' wrap={true}>
                  <div className='bg-ui-primary/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item One
                  </div>
                  <div className='bg-ui-secondary/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Two
                  </div>
                  <div className='bg-ui-success/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Three
                  </div>
                  <div className='bg-ui-warning/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Four
                  </div>
                  <div className='bg-ui-error/20 px-4 py-2 rounded whitespace-nowrap'>
                    Item Five
                  </div>
                </Stack>
              </div>
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
          'Shows how the wrap property affects overflow behavior. Try resizing your browser to see the difference.',
      },
    },
  },
};
