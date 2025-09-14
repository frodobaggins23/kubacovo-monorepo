import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { FormField } from '../FormField/FormField';
import { StoryWrapper } from '../../utils/StoryWrapper';
import { ThemeShowcaseWrapper } from '../../utils/ThemeShowcase';

const meta: Meta<typeof Radio> = {
  title: '03. Forms/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Radio component with built-in label support. Use with FormField for error handling and help text. Group related radios with the same name prop.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the radio button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio button',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Visual variant of the radio button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for grouping radio buttons',
    },
    value: {
      control: { type: 'text' },
      description: 'Value of the radio button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <StoryWrapper>
      <div className='max-w-md'>
        <Radio {...args} />
      </div>
    </StoryWrapper>
  ),
  args: {
    label: 'Option 1',
    variant: 'default',
    name: 'example',
    value: 'option1',
  },
};

export const Variants: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Visual Variants
          </h3>
          <div className='space-y-3'>
            <Radio
              variant='default'
              label='Default radio'
              name='variants'
              value='default'
            />
            <Radio
              variant='error'
              label='Error radio'
              name='variants'
              value='error'
            />
            <Radio
              variant='success'
              label='Success radio'
              name='variants'
              value='success'
            />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Sizes: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Sizes
          </h3>
          <div className='space-y-3'>
            <Radio size='sm' label='Small radio' name='sizes' value='small' />
            <Radio size='md' label='Medium radio' name='sizes' value='medium' />
            <Radio size='lg' label='Large radio' name='sizes' value='large' />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const States: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            States
          </h3>
          <div className='space-y-3'>
            <Radio label='Normal radio' name='states' value='normal' />
            <Radio
              checked
              label='Selected radio'
              name='states'
              value='selected'
            />
            <Radio
              disabled
              label='Disabled radio'
              name='states-disabled'
              value='disabled'
            />
            <Radio
              disabled
              checked
              label='Disabled selected radio'
              name='states-disabled-selected'
              value='disabled-selected'
            />
          </div>
        </div>
      </div>
    </StoryWrapper>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const RadioGroup: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            Radio Button Group
          </h3>
          <p className='text-xs text-ui-text-secondary mb-4'>
            Related radio buttons should share the same name attribute.
          </p>
        </div>

        <div className='space-y-3'>
          <div>
            <h4 className='text-sm font-medium text-ui-text-primary mb-2'>
              Preferred contact method:
            </h4>
            <div className='space-y-2'>
              <Radio
                label='Email'
                name='contact'
                value='email'
                defaultChecked
              />
              <Radio label='Phone' name='contact' value='phone' />
              <Radio label='Text message' name='contact' value='text' />
              <Radio label='Mail' name='contact' value='mail' />
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
          'Example showing radio buttons grouped together with the same name attribute, allowing only one selection.',
      },
    },
  },
};

export const WithFormField: Story = {
  render: () => (
    <StoryWrapper>
      <div className='max-w-md space-y-6'>
        <div>
          <h3 className='text-sm font-medium text-ui-text-primary mb-3'>
            With FormField Wrapper
          </h3>
          <p className='text-xs text-ui-text-secondary mb-4'>
            Use FormField wrapper for error handling and help text.
          </p>
        </div>

        <div className='space-y-6'>
          <div>
            <FormField helpText='Choose your preferred notification method'>
              <div className='space-y-2'>
                <Radio
                  label='Email notifications'
                  name='notifications'
                  value='email'
                  defaultChecked
                />
                <Radio
                  label='Push notifications'
                  name='notifications'
                  value='push'
                />
                <Radio
                  label='No notifications'
                  name='notifications'
                  value='none'
                />
              </div>
            </FormField>
          </div>

          <div>
            <FormField error='Please select a payment method to continue'>
              <div className='space-y-2'>
                <Radio label='Credit card' name='payment' value='credit' />
                <Radio label='PayPal' name='payment' value='paypal' />
                <Radio label='Bank transfer' name='payment' value='bank' />
              </div>
            </FormField>
          </div>

          <div>
            <FormField
              required
              helpText='This helps us customize your experience'
            >
              <div className='space-y-2'>
                <Radio label='Student' name='role' value='student' />
                <Radio label='Professional' name='role' value='professional' />
                <Radio label='Business owner' name='role' value='business' />
              </div>
            </FormField>
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
          'Examples showing Radio buttons used with FormField wrapper. FormField handles error messages, help text, and required field indicators for the entire group.',
      },
    },
  },
};

export const ThemeShowcase: Story = {
  render: () => (
    <ThemeShowcaseWrapper
      componentName='Radio'
      surfaceExample={
        <>
          <Radio
            label='Small on surface'
            size='sm'
            name='surface-demo'
            value='small'
          />
          <Radio
            label='Default on surface'
            name='surface-demo'
            value='default'
          />
        </>
      }
    >
      <Radio
        label='Default'
        variant='default'
        name='theme-demo'
        value='default'
      />
      <Radio label='Error' variant='error' name='theme-demo' value='error' />
      <Radio
        label='Success'
        variant='success'
        name='theme-demo'
        value='success'
      />
    </ThemeShowcaseWrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Radio component theme demonstration. All radio buttons now include labels for better accessibility.',
      },
    },
  },
};
