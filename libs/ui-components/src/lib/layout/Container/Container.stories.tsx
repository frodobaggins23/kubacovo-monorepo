import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { StoryWrapper } from '../../utils/StoryWrapper';

const meta: Meta<typeof Container> = {
  title: '02. Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    center: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <Container {...args}>
        <div className='bg-ui-primary/20 text-ui-primary p-4 rounded mb-4'>
          First content block - demonstrates container width constraints and
          padding
        </div>
        <div className='bg-ui-secondary/20 text-ui-secondary p-4 rounded mb-4'>
          Second content block - shows how container centers content when
          enabled
        </div>
        <div className='bg-ui-success/20 text-ui-success p-4 rounded'>
          Third content block - container maintains consistent spacing and
          alignment
        </div>
      </Container>
    </StoryWrapper>
  ),
  args: {
    size: 'lg',
    padding: 'md',
    center: true,
  },
};

// Layout behavior demonstration
export const LayoutBehavior: Story = {
  render: () => (
    <StoryWrapper centered={false}>
      <div className='space-y-8 w-full'>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <label className='text-sm font-medium'>Size Variations</label>
            <div className='space-y-6'>
              <div className='space-y-2'>
                <span className='text-xs text-ui-text-secondary'>
                  Small (max-w-sm - 384px)
                </span>
                <div className='bg-ui-border/20 p-1 w-full'>
                  <Container
                    size='sm'
                    className='bg-ui-primary/10 p-4 border border-ui-primary/30'
                  >
                    <div className='text-center text-sm'>
                      Small container - narrow width for sidebars
                    </div>
                  </Container>
                </div>
              </div>
              <div className='space-y-2'>
                <span className='text-xs text-ui-text-secondary'>
                  Medium (max-w-lg - 512px)
                </span>
                <div className='bg-ui-border/20 p-1 w-full'>
                  <Container
                    size='md'
                    className='bg-ui-secondary/10 p-4 border border-ui-secondary/30'
                  >
                    <div className='text-center text-sm'>
                      Medium container - forms and modals
                    </div>
                  </Container>
                </div>
              </div>
              <div className='space-y-2'>
                <span className='text-xs text-ui-text-secondary'>
                  Large (max-w-2xl - 672px)
                </span>
                <div className='bg-ui-border/20 p-1 w-full'>
                  <Container
                    size='lg'
                    className='bg-ui-success/10 p-4 border border-ui-success/30'
                  >
                    <div className='text-center text-sm'>
                      Large container - article content and reading width
                    </div>
                  </Container>
                </div>
              </div>
              <div className='space-y-2'>
                <span className='text-xs text-ui-text-secondary'>
                  Extra Large (max-w-4xl - 896px)
                </span>
                <div className='bg-ui-border/20 p-1 w-full'>
                  <Container
                    size='xl'
                    className='bg-ui-warning/10 p-4 border border-ui-warning/30'
                  >
                    <div className='text-center text-sm'>
                      Extra large container - dashboard layouts and wide content
                    </div>
                  </Container>
                </div>
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

// Responsive behavior story
export const ResponsiveBehavior: Story = {
  render: () => (
    <StoryWrapper centered={false}>
      <div className='w-full max-w-6xl space-y-6'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Responsive Layout</label>
          <p className='text-sm text-ui-text-secondary'>
            Resize your browser to see how the layout adapts to different screen
            sizes
          </p>
        </div>
        <div className='space-y-4'>
          <Container
            size='sm'
            className='bg-ui-primary/10 p-4 md:bg-ui-secondary/10'
          >
            <div className='text-center'>
              Responsive container: sm on mobile, changes color on md+
            </div>
          </Container>
          <Container size='lg' className='bg-ui-success/10 p-2 md:p-6'>
            <div className='text-center'>
              Different padding on mobile vs desktop
            </div>
          </Container>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};
