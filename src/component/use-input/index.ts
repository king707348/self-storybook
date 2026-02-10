import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import './index.css';

export interface UseInputProps {
  type?: string;
  className?: string
  size?: 'small' | 'medium' | 'large';
  placeHolder?: string;
  pattern?: string;
  onInput?: (e: Event) => void;
}

export const UseInput = ({ 
    type, 
    className, 
    size, 
    placeHolder, 
    pattern, 
    onInput 
}: UseInputProps) => {
  const mode = []
  if(className) mode.push(className)
  if(size) mode.push(`use--${size}`)


  return html`
    <input
      type=${type || "text"}
        class="${mode.join(' ')} border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder=${placeHolder}
        pattern=${pattern}
        @input=${onInput}
    />`

};

