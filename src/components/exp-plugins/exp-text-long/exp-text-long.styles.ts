import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    width: 100%;
  }

  .nx-theme-styles {
    font-family: var(--ntx-form-theme-font-family, 'Open Sans', sans-serif);
    width: 100%;
  }

  /* Storybook fallback styles for Nintex elements */
  ntx-textbox {
    width: 100%;
    display: block;
  }

  ntx-label {
    display: block;
    margin-bottom: 8px;
  }

  ntx-simple-textbox {
    display: block;
  }

  .nx-textbox-control {
    width: 100%;
    margin-bottom: 16px;
  }

  .nx-zinc-control-group {
    display: block;
  }

  .nx-zinc-control-label {
    display: block;
    margin-bottom: 8px;
  }

  .nx-zinc-control-input {
    display: block;
  }

  .nx-form-label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
  }

  .nx-title {
    font-weight: 600;
  }

  .nx-label-symbols {
    color: #666;
  }

  /* Textarea styling fallbacks */
  .form-control {
    width: 100%;
    min-width: 200px;
    box-sizing: border-box;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;
    line-height: 1.42857143;
    background-color: #fff;
    transition: border-color 0.15s ease-in-out;
    min-height: 100px;
    resize: vertical;
  }

  .form-control:focus {
    outline: none;
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }

  .form-control:disabled,
  .form-control[readonly] {
    background-color: #f5f5f5;
    opacity: 1;
  }

  /* Nintex theme class fallbacks */
  .nx-theme-input-1 {
    /* These will use the form-control styles above */
  }

  .nx-theme-label-1 {
    /* These will use the nx-form-label styles above */
  }

  /* Storybook fallback layout */
  .storybook-fallback {
    display: block;
    width: 100%;
    min-width: 300px;
    margin: 16px 0;
  }

  .storybook-fallback label {
    display: block;
    margin-bottom: 8px;
  }

  .storybook-fallback textarea {
    display: block;
    width: 100%;
  }
`;