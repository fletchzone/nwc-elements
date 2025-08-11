import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { PluginContract } from '@nintex/form-plugin-contract';
import { styles } from './exp-nforms-elements.styles';

@customElement('form-plugin-exp-nforms-elements')
export class ExpNFormsElements extends LitElement {
  static styles = styles;

  // Attributes for the inner web component <nforms-elements>
  @property({ type: String, attribute: false })
  value: string = '';

  @property({ type: String })
  wcTitle: string = '';

  @property({ type: String })
  nativeUrl: string = '';

  // Optional JSON object (string) of additional attributes to set on <nforms-elements>
  // Example: { "data-user": "123", "mode": "view" }
  @property({ type: String })
  attributesJson: string = '';

  // Base URL for assets (used to replace {BASE_URL} in assetsHtml)
  @property({ type: String })
  assetsBaseUrl: string = 'https://cmsproxy.inflight.local';

  private hasInjectedAssets = false;

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return {
      controlName: 'EXP NForms Elements',
      fallbackDisableSubmit: false,
      version: '1.0.0-beta.2',
      pluginAuthor: 'EXP Team',
      pluginVersion: '1.0.0',
      description: 'Renders the nforms-elements web component with configurable attributes',
      iconUrl: 'iframe',
      groupName: 'EXP',
      properties: {
        value: {
          title: 'Value',
          type: 'string',
          isValueField: false,
          defaultValue: '',
        },
        nativeUrl: {
          title: 'native-url',
          type: 'string',
          description: 'Value for the native-url attribute on <nforms-elements>',
          defaultValue: '',
        },
        wcTitle: {
          title: 'title',
          type: 'string',
          description: 'Value for the title attribute on <nforms-elements>',
          defaultValue: '',
        },
        attributesJson: {
          title: 'Additional attributes',
          type: 'string',
          description:
            'Optional JSON object of additional attributes to set on <nforms-elements>. Example: { "data-user": "123" }',
          defaultValue: '',
        },
        assetsBaseUrl: {
          title: 'Assets Base URL',
          type: 'string',
          description: 'Base URL that hosts CSS/JS for Angular Elements',
          defaultValue: 'https://cmsproxy.inflight.local',
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        visibility: true,
        toolTip: true,
      },
      designer: {
        canvasRestrictions: {
          minSize: 6,
          isFullRow: true,
        },
      },
    };
  }

  protected updated(): void {
    this.ensureAssetsLoaded();
    this.applyDynamicAttributes();
  }

  private ensureAssetsLoaded(): void {
    if (this.hasInjectedAssets) return;
    const base = (this.assetsBaseUrl || '').replace(/\/$/, '');
    if (!base) return;

    const cssHrefs = [
      `${base}/dist/elements-assets/styles.css`,
      `${base}/dist/elements-assets/themes/skuid/theme.css`,
    ];

    const jsSrcs = [
      `${base}/dist/elements-assets/dependencies.js`,
      `${base}/dist/elements-assets/config.general.js`,
      `${base}/dist/elements/runtime.js`,
      `${base}/dist/elements/polyfills.js`,
      `${base}/dist/elements/main.js`,
    ];

    const head = document.head || document.getElementsByTagName('head')[0];

    // Inject CSS
    cssHrefs.forEach(href => {
      if (document.querySelector(`head link[rel="stylesheet"][href="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      head.appendChild(link);
    });

    // Inject JS in order
    jsSrcs.forEach(src => {
      if (document.querySelector(`head script[src="${src}"]`)) return;
      const script = document.createElement('script');
      script.src = src;
      // Keep runtime/polyfills/main deferred to preserve load order without blocking
      if (/\/runtime\.js$|\/polyfills\.js$|\/main\.js$/.test(src)) {
        script.defer = true;
      }
      head.appendChild(script);
    });

    this.hasInjectedAssets = true;
  }

  private applyDynamicAttributes(): void {
    const el = this.renderRoot?.querySelector('nforms-elements') as HTMLElement | null;
    if (!el) return;

    // Core attributes
    if (this.nativeUrl) {
      el.setAttribute('native-url', this.nativeUrl);
    } else {
      el.removeAttribute('native-url');
    }

    if (this.wcTitle) {
      el.setAttribute('title', this.wcTitle);
    } else {
      el.removeAttribute('title');
    }

    // Additional attributes via JSON
    const extras = this.safeParseJsonRecord(this.attributesJson);
    // First, remove any attributes we previously added that are not present anymore is complex without tracking.
    // Keep it simple: only set/overwrite the provided keys.
    Object.entries(extras).forEach(([key, raw]) => {
      const value = raw == null ? '' : String(raw);
      try {
        if (value === '') {
          el.removeAttribute(key);
        } else {
          el.setAttribute(key, value);
        }
      } catch {
        // Ignore invalid attribute names
      }
    });
  }

  private safeParseJsonRecord(input: string): Record<string, unknown> {
    if (!input || typeof input !== 'string') return {};
    try {
      const obj = JSON.parse(input);
      if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        return obj as Record<string, unknown>;
      }
    } catch {
      // ignore malformed JSON
    }
    return {};
  }

  render() {
    return html`
      <div class="nx-theme-styles">
        <nforms-elements
          native-url=${this.nativeUrl || ''}
          title=${this.wcTitle || ''}
        ></nforms-elements>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-plugin-exp-nforms-elements': ExpNFormsElements;
  }
}


