import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { StoryWrapper } from '../../utils/StoryWrapper';

const meta: Meta<typeof Skeleton> = {
  title: '04. Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'page',
        'list',
        'table',
        'card',
        'form',
        'profile',
        'article',
        'dashboard',
      ],
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <Skeleton {...args} />
    </StoryWrapper>
  ),
  args: {
    variant: 'card',
    width: '768px',
    height: '90vh',
  },
};

// Card variant - Default loading state for content cards
export const Card: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-sm mx-auto'>
        <Skeleton variant='card' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Perfect for loading states of blog cards, product cards, or any content cards with images and text.',
      },
    },
  },
};

// List variant - Loading state for lists and feeds
export const List: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-2xl mx-auto'>
        <Skeleton variant='list' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Ideal for loading states of user lists, comment feeds, search results, or any list-based content.',
      },
    },
  },
};

// Table variant - Loading state for data tables
export const Table: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-4xl mx-auto'>
        <Skeleton variant='table' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use for loading states of data tables, spreadsheets, or any tabular data presentation.',
      },
    },
  },
};

// Form variant - Loading state for forms
export const Form: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md mx-auto'>
        <Skeleton variant='form' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Perfect for loading states of contact forms, registration forms, or any form-based interfaces.',
      },
    },
  },
};

// Profile variant - Loading state for user profiles
export const Profile: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-lg mx-auto'>
        <Skeleton variant='profile' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Great for loading states of user profiles, author bios, or any person-centric content.',
      },
    },
  },
};

// Article variant - Loading state for articles and blog posts
export const Article: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-3xl mx-auto'>
        <Skeleton variant='article' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Ideal for loading states of blog posts, news articles, or any long-form content.',
      },
    },
  },
};

// Dashboard variant - Loading state for dashboards and analytics
export const Dashboard: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-6xl mx-auto'>
        <Skeleton variant='dashboard' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Perfect for loading states of dashboards, analytics pages, or any metrics-heavy interfaces.',
      },
    },
  },
};

// Page variant - Full page loading state
export const Page: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-6xl mx-auto'>
        <Skeleton variant='page' />
      </div>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use for full page loading states with header, navigation, sidebar, and main content areas.',
      },
    },
  },
};

// Custom dimensions example
export const CustomDimensions: Story = {
  render: () => (
    <StoryWrapper>
      <div className='space-y-6'>
        <div>
          <h3 className='text-lg font-medium mb-4'>Custom Width</h3>
          <Skeleton variant='card' width={300} />
        </div>
        <div>
          <h3 className='text-lg font-medium mb-4'>Custom Height</h3>
          <Skeleton variant='list' height={400} />
        </div>
        <div>
          <h3 className='text-lg font-medium mb-4'>Both Width and Height</h3>
          <Skeleton variant='form' width={400} height={300} />
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Examples of using custom width and height properties to control skeleton dimensions.',
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='space-y-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-lg font-medium mb-4'>Card</h3>
            <div className='max-w-sm'>
              <Skeleton variant='card' />
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-4'>Form</h3>
            <div className='max-w-md'>
              <Skeleton variant='form' />
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-4'>Profile</h3>
            <div className='max-w-lg'>
              <Skeleton variant='profile' />
            </div>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-4'>Table</h3>
            <div className='max-w-xl'>
              <Skeleton variant='table' />
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-lg font-medium mb-4'>List</h3>
          <div className='max-w-2xl'>
            <Skeleton variant='list' />
          </div>
        </div>
        <div>
          <h3 className='text-lg font-medium mb-4'>Article</h3>
          <div className='max-w-3xl'>
            <Skeleton variant='article' />
          </div>
        </div>
        <div>
          <h3 className='text-lg font-medium mb-4'>Dashboard</h3>
          <div className='max-w-5xl'>
            <Skeleton variant='dashboard' />
          </div>
        </div>
        <div>
          <h3 className='text-lg font-medium mb-4'>Page</h3>
          <div className='max-w-6xl'>
            <Skeleton variant='page' />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};
