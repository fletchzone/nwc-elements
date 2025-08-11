import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract } from '@nintex/form-plugin-contract';
import { updatePluginValue } from '../../../utils/events';
import { styles } from './exp-text-long.styles';

@customElement('form-plugin-exp-text-long')
export class ExpTextLong extends LitElement {
  static styles = styles;

  @property()
  value: string = '';
  
  @property({ reflect: true })
  labelCssSelector: string = '';
  
  @property({ reflect: true })
  inputCssSelector: string = '';


  @property({ type: Boolean })
  readOnly: boolean = false;

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return {
      controlName: 'EXP Text Long',
      fallbackDisableSubmit: false,
      version: '1.0.0-beta.2',
      pluginAuthor: 'EXP Team',
      pluginVersion: '1.0.0',
      description: 'Extended textarea field with custom CSS selectors',
      iconUrl: 'multiline-text',
      searchTerms: ['text', 'textarea', 'field', 'long', 'exp', 'multiline'],
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
          description: 'CSS selector for the textarea element',
          defaultValue: '',
        }
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
          <div class="nx-textbox-control nx-zinc-control-group ng-star-inserted" data-e2e="exp-text-long-get">
            <div class="nx-zinc-control-input">
              <ntx-simple-textbox ntxpreventsubmitonenter="">
                <textarea data-simple-control="true" 
                       ntxmaskableinputvalueaccessor="" 
                       class="form-control nx-theme-input-1 ng-untouched ng-pristine ng-valid" 
                       id="exp-text-long" 
                       name="exp-text-long" 
                       aria-label="EXP Text Long" 
                       aria-describedby="" 
                       aria-required="false" 
                       aria-invalid="false" 
                       aria-placeholder="" 
                       aria-readonly="${this.readOnly}" 
                       data-e2e="exp-text-long-input" 
                       rows="4"
                       .value=${this.value}
                       @input=${this.onChange}
                       @change=${this.onChange}
                       ?readonly=${this.readOnly}></textarea>
              </ntx-simple-textbox>
            </div>
          </div>
          <!----><!---->
        </ntx-textbox>
      </div>
    `;
  }

  private onChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;
    updatePluginValue(this, { detail: this.value });
  }
}