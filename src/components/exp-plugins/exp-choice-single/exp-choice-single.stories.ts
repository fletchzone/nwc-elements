import type { Meta, StoryObj } from '@storybook/web-components';
import './exp-choice-single';
import { ExpChoiceSingle } from './exp-choice-single';

const meta: Meta<typeof ExpChoiceSingle> = {
  title: 'EXP/Exp Choice Single',
  component: 'form-plugin-exp-choice-single',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    showAsRadio: {
      control: 'boolean',
      description: 'Display as radio buttons instead of dropdown',
    },
    verticalLayout: {
      control: 'boolean',
      description: 'Display radio buttons vertically (only applies to radio buttons)',
    },
    labelCssSelector: {
      control: 'text',
      description: 'CSS selector for the label element',
    },
    inputCssSelector: {
      control: 'text',
      description: 'CSS selector for the input elements',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the choices are read-only',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    showAsRadio: true,
    verticalLayout: true,
    labelCssSelector: '',
    inputCssSelector: '',
    readOnly: false,
  },
};

export const RadioHorizontal: Story = {
  args: {
    value: 'Option 2',
    showAsRadio: true,
    verticalLayout: false,
    labelCssSelector: '',
    inputCssSelector: '',
    readOnly: false,
  },
};

export const Dropdown: Story = {
  args: {
    value: 'Option 2',
    showAsRadio: false,
    verticalLayout: true,
    labelCssSelector: '',
    inputCssSelector: '',
    readOnly: false,
  },
};

export const ReadOnlyRadio: Story = {
  args: {
    value: 'Option 2',
    showAsRadio: true,
    verticalLayout: true,
    labelCssSelector: '',
    inputCssSelector: '',
    readOnly: true,
  },
};

export const ReadOnlyDropdown: Story = {
  args: {
    value: 'Option 2',
    showAsRadio: false,
    verticalLayout: true,
    labelCssSelector: '.my-label',
    inputCssSelector: '.my-input',
    readOnly: true,
  },
};