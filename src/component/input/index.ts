import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import type { UseInputProps } from "./types";

import './index.css';

export const UseInput = ({ 
    type, 
    className, 
    style,
    size, 
    errorMessage,
    placeHolder, 
    onInput 
}: UseInputProps) => {
  const mode:string[] = ['border-0', 'bg-blue-50' ,'w-fit']
  if(className) mode.push(className)
  if(size) mode.push(`use--${size}`)
    console.log(errorMessage, mode.join(' '))

  return html`
    <div class="flex flex-col gap-1">
      <input
        type=${type}
        name=${type}
        class="${mode.join(' ')}"
        style=${styleMap(style || {})}
        placeholder=${placeHolder}
        @input=${onInput}
      />
      <small class="text-red-500">${errorMessage}</small>
    </div>
  `
};


