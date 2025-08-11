import type { Meta, StoryObj } from '@storybook/web-components';
import './exp-text-long';
import { ExpTextLong } from './exp-text-long';

const meta: Meta<typeof ExpTextLong> = {
  title: 'EXP/Exp Text Long',
  component: 'form-plugin-exp-text-long',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Current value of the textarea',
    },
    labelCssSelector: {
      control: 'text',
      description: 'CSS selector for the label element',
    },
    inputCssSelector: {
      control: 'text',
      description: 'CSS selector for the textarea element',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
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
    readOnly: false,
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a multi-line text area\nwith some example content\nthat spans multiple lines.',
    labelCssSelector: '.my-label',
    inputCssSelector: '.my-textarea',
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'This is read-only text\nin a textarea that cannot be edited\nby the user.',
    labelCssSelector: '',
    inputCssSelector: '',
    readOnly: true,
  },
};