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
    pass,
    fail,
    placeHolder, 
    onInput 
}: UseInputProps) => {
  const mode:string[] = ['border-0', 'bg-blue-50' ,'w-fit']
  if(className) mode.push(className)
  if(size) mode.push(`use--${size}`)
  console.log(mode.join(' '))

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
      ${
        errorMessage == undefined && html``
        || !errorMessage && html`<small class="text-red-500">${fail}</small>`
        || errorMessage && html`<small class="text-green-500">${pass}</small>`
      }
    </div>
  `
};


