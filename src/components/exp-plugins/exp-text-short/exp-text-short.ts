import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract } from '@nintex/form-plugin-contract';
import { updatePluginValue } from '../../../utils/events';
import { styles } from './exp-text-short.styles';

@customElement('form-plugin-exp-text-short')
export class ExpTextShort extends LitElement {
  static styles = styles;

  @property()
  value: string = '';
  
  @property({ reflect: true })
  labelCssSelector: string = '';
  
  @property({ reflect: true })
  inputCssSelector: string = '';
  
  @property({ reflect: true })
  actionCssSelector: string = '';

  @property({ type: Boolean })
  readOnly: boolean = false;

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return {
      controlName: 'EXP Text Short',
      fallbackDisableSubmit: false,
      version: '1.0.0-beta.2',
      pluginAuthor: 'EXP Team',
      pluginVersion: '1.0.0',
      description: 'Extended text input field with custom CSS selectors',
      iconUrl: 'one-line-text',
      searchTerms: ['text', 'input', 'field', 'short', 'exp'],
      groupName: 'EXP',
      properties: {
        value: {
          title: 'Value',
          type: 'string',
          isValueField: true,
          defaultValue: '',
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
          description: 'CSS selector for the input element',
          defaultValue: '',
        },
        actionCssSelector: {
          type: 'string',
          title: 'Action CSS Selector',
          description: 'CSS selector for the action element',
          defaultValue: '',
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        readOnly: true,
        required: true,
        visibility: true,
        toolTip: true,
        placeholder: true,
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
    // Check if we're in a Nintex environment (custom elements are defined)
    const isNintexEnvironment = customElements.get('ntx-textbox') !== undefined;
    
      return html`
        <div class="nx-theme-styles">
          <ntx-textbox class="ng-star-inserted">
            <div class="nx-textbox-control nx-zinc-control-group ng-star-inserted" data-e2e="exp-text-short-get">
              <div class="nx-zinc-control-input">
                <ntx-simple-textbox ntxpreventsubmitonenter="">
                  <input data-simple-control="true" 
                         ntxmaskableinputvalueaccessor="" 
                         class="form-control nx-theme-input-1 ng-untouched ng-pristine ng-valid" 
                         id="exp-text-short" 
                         name="exp-text-short" 
                         aria-label="EXP Text Short" 
                         aria-describedby="" 
                         aria-required="false" 
                         aria-invalid="false" 
                         aria-placeholder="" 
                         aria-readonly="${this.readOnly}" 
                         data-e2e="exp-text-short-input" 
                         autocomplete="off"
                         .value=${this.value}
                         @input=${this.onChange}
                         @change=${this.onChange}
                         ?readonly=${this.readOnly}>
                </ntx-simple-textbox>
              </div>
            </div>
            <!----><!---->
          </ntx-textbox>
        </div>
      `;
    
  }

  private onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    updatePluginValue(this, { detail: this.value });
  }
} 