import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract } from '@nintex/form-plugin-contract';
import { updatePluginValue } from '../../../utils/events';
import { styles } from './exp-choice-single.styles';

@customElement('form-plugin-exp-choice-single')
export class ExpChoiceSingle extends LitElement {
  static styles = styles;

  @property()
  value: string = '';
  
  @property({ type: Boolean, reflect: true })
  showAsRadio: boolean = true;
  
  @property({ type: Boolean, reflect: true })
  verticalLayout: boolean = true;
  
  @property({ reflect: true })
  labelCssSelector: string = '';
  
  @property({ reflect: true })
  inputCssSelector: string = '';

  @property({ type: Boolean })
  readOnly: boolean = false;

  @property({ reflect: true })
  myVariable: string = '';

  private get choiceOptions(): string[] {
    // You can use the form variable value here
    // For example, if myVariable contains a dynamic value
    const baseOptions = ['Option 1', 'Option 2', 'Option 3'];
    
    // Example: Add a dynamic option based on the form variable
    if (this.myVariable && this.myVariable.trim()) {
      return [`Dynamic: ${this.myVariable}`, ...baseOptions];
    }
    
    return baseOptions;
  }

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return {
      controlName: 'EXP Choice Single',
      fallbackDisableSubmit: false,
      version: '1.0.0-beta.2',
      pluginAuthor: 'EXP Team',
      pluginVersion: '1.0.0',
      description: 'Single choice selection with radio buttons or dropdown',
      iconUrl: 'choice',
      searchTerms: ['choice', 'radio', 'dropdown', 'select', 'single', 'exp'],
      groupName: 'EXP',
      properties: {
        value: {
          title: 'Value',
          type: 'string',
          isValueField: true,
          defaultValue: '',
          enum: ['Option 1', 'Option 2', 'Option 3'],
          showAsRadio: true,
          verticalLayout: true,
        },
        showAsRadio: {
          type: 'boolean',
          title: 'Show as radio buttons',
          description: 'Display as radio buttons instead of dropdown',
          defaultValue: true,
        },
        verticalLayout: {
          type: 'boolean',
          title: 'Vertical layout',
          description: 'Display radio buttons vertically (only applies to radio buttons)',
          defaultValue: true,
        },
        labelCssSelector: {
          type: 'string',
          title: 'Label CSS Selector',
          description: 'CSS selector for the label element',
          defaultValue: '',
        },
        inputCssSelector: {
          type: 'string',
          title: 'Input CSS Selector',
          description: 'CSS selector for the input elements',
          defaultValue: '',
        },
        myVariable: {
          type: 'string',
          title: 'My Variable',
          description: 'Access to form variable "myvariable"',
          isValueField: false,
          formVariableName: 'myvariable',
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        readOnly: true,
        required: true,
        visibility: true,
        toolTip: true,
        defaultValue: true,
      },
      designer: {
        canvasRestrictions: {
          minSize: 6,
          isFullRow: false,
        },
      },
    };
  }

  render() {
    const isNintexEnvironment = customElements.get('ntx-textbox') !== undefined;
    
    return html`
      <div class="nx-theme-styles">
        <div class="choice-container">
          ${this.showAsRadio ? this.renderRadioButtons() : this.renderDropdown()}
        </div>
      </div>
    `;
  }

  private renderRadioButtons() {
    const uniqueId = `exp-choice-single-${Math.random().toString(36).substr(2, 9)}`;
    const layoutClass = this.verticalLayout ? 'vertical' : 'horizontal';
    
    return html`
      <div class="radio-group ${layoutClass}" data-layout="${layoutClass}">
        ${this.choiceOptions.map((option, index) => html`
          <div class="radio-item">
            <input 
              type="radio" 
              id="${uniqueId}-${index}"
              name="${uniqueId}"
              value="${option}"
              .checked=${this.value === option}
              ?disabled=${this.readOnly}
              @change=${this.onRadioChange}
              @input=${this.onRadioChange}
              class="radio-input">
            <label for="${uniqueId}-${index}" class="radio-label">
              ${option}
            </label>
          </div>
        `)}
      </div>
    `;
  }

  private renderDropdown() {
    return html`
      <div class="dropdown-container">
        <select 
          class="form-control dropdown-select"
          .value=${this.value}
          ?disabled=${this.readOnly}
          @change=${this.onDropdownChange}
          @input=${this.onDropdownChange}>
          <option value="">Select an option</option>
          ${this.choiceOptions.map(option => html`
            <option value="${option}">
              ${option}
            </option>
          `)}
        </select>
      </div>
    `;
  }

  private onRadioChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchValueChange();
  }

  private onDropdownChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.dispatchValueChange();
  }

  private dispatchValueChange() {
    updatePluginValue(this, { detail: this.value });
  }
}