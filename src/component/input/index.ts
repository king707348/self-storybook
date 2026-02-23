import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import type { UseInputProps } from "./types";

import './index.css';

export const UseInput = ({ 
    type, 
    className, 
    style,
    size, 
    placeHolder, 
    onInput 
}: UseInputProps) => {
  const mode = ['border-0']
  if(className) mode.push(className)
  if(size) mode.push(`use--${size}`)
    
  const setPattern = type === 'email' ? `pattern=^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`: ""

  return html`
    <input
      type=${type}
      class="${mode.join(' ')}"
      style=${styleMap(style || {})}
      placeholder=${placeHolder}
      ${setPattern}
      @input=${onInput}
    />`

};


