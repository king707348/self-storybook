import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import './index.css';

export interface UseInputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'file' | 'date' | 'color' | 'checkbox' | 'radio' | 'range' | 'search' | 'tel' | 'url';
  className?: string
  style?: Record<string, string | number>
  size?: 'small' | 'medium' | 'large'
  placeHolder?: string
  pattern?: string
  onInput?: (e: Event) => void
}

export const UseInput = ({ 
    type, 
    className, 
    style,
    size, 
    placeHolder, 
    onInput 
}: UseInputProps) => {
  const mode = []
  if(className) mode.push(className)
  if(size) mode.push(`use--${size}`)
    
  const setPattern = type === 'email' ? `pattern=^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`: ""
  console.log(setPattern)

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


