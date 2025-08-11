import type { Meta, StoryObj } from '@storybook/web-components';
import './exp-text-short';
import { ExpTextShort } from './exp-text-short';

const meta: Meta<typeof ExpTextShort> = {
  title: 'EXP/Exp Text Short',
  component: 'form-plugin-exp-text-short',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
    labelCssSelector: {
      control: 'text',
      description: 'CSS selector for the label element',
    },
    inputCssSelector: {
      control: 'text',
      description: 'CSS selector for the input element',
    },
    actionCssSelector: {
      control: 'text',
      description: 'CSS selector for the action element',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    labelCssSelector: '',
    inputCssSelector: '',
    actionCssSelector: '',
    readOnly: false,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World',
    labelCssSelector: '.my-label',
    inputCssSelector: '.my-input',
    actionCssSelector: '.my-action',
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'This is read-only text',
    labelCssSelector: '',
    inputCssSelector: '',
    actionCssSelector: '',
    readOnly: true,
  },
}; 