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

  .choice-container {
    width: 100%;
    min-width: 200px;
  }

  /* Radio Button Styles */
  .radio-group {
    display: flex;
    gap: 12px;
  }

  .radio-group.vertical {
    flex-direction: column;
  }

  .radio-group.horizontal {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .radio-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .radio-input {
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
  }

  .radio-input:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .radio-label {
    font-size: 14px;
    line-height: 1.4;
    color: #333;
    cursor: pointer;
    user-select: none;
  }

  .radio-input:disabled + .radio-label {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Dropdown Styles */
  .dropdown-container {
    width: 100%;
  }

  .dropdown-select {
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
    height: 40px;
    cursor: pointer;
  }

  .dropdown-select:focus {
    outline: none;
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }

  .dropdown-select:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Responsive adjustments - only apply to horizontal layouts on mobile */
  @media (max-width: 600px) {
    .radio-group.horizontal {
      flex-direction: column;
    }
    
    .radio-group.horizontal .radio-item {
      margin-right: 0;
      margin-bottom: 8px;
    }
    
    .radio-group.horizontal .radio-item:last-child {
      margin-bottom: 0;
    }
  }

  /* Focus improvements */
  .radio-input:focus {
    outline: 2px solid #007acc;
    outline-offset: 2px;
  }

  /* Hover effects */
  .radio-item:hover .radio-label {
    color: #007acc;
  }

  .dropdown-select:hover:not(:disabled) {
    border-color: #999;
  }

  /* Better spacing for horizontal layout */
  .radio-group.horizontal .radio-item {
    margin-right: 24px;
    margin-bottom: 0;
  }

  .radio-group.horizontal .radio-item:last-child {
    margin-right: 0;
  }

  /* Ensure vertical spacing for vertical layout */
  .radio-group.vertical .radio-item {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .radio-group.vertical .radio-item:last-child {
    margin-bottom: 0;
  }
`;