import type { Meta, StoryObj } from '@storybook/web-components';
import './exp-nforms-elements';
import { ExpNFormsElements } from './exp-nforms-elements';

const meta: Meta = {
  title: 'EXP/Exp NForms Elements',
  component: 'form-plugin-exp-nforms-elements',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    nativeUrl: {
      control: 'text',
      description: 'Value for the native-url attribute on <nforms-elements>',
    },
    wcTitle: {
      control: 'text',
      description: 'Value for the title attribute on <nforms-elements>',
    },
    attributesJson: {
      control: 'text',
      description: 'Additional attributes as JSON (e.g., {"data-user":"123","mode":"view"})',
    },
    assetsBaseUrl: {
      control: 'text',
      description: 'Base URL that hosts CSS/JS for Angular Elements',
    },
  },
};

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    nativeUrl: 'EMPLOYEE/HRMS/c/EL_EMPLOYEE_FL.HR_EE_ADDR_FL.GBL?TILE=Y',
    wcTitle: 'Address Change Form',
    attributesJson: '',
    assetsBaseUrl: 'https://cmsproxy.inflight.local',
  },
};

export const WithExtras: Story = {
  args: {
    nativeUrl: 'EMPLOYEE/HRMS/c/EL_EMPLOYEE_FL.HR_EE_ADDR_FL.GBL?TILE=Y',
    wcTitle: 'Address Change Form',
    attributesJson: '{"data-user":"123","mode":"view"}',
    assetsBaseUrl: 'https://cmsproxy.inflight.local',
  },
};


