export interface UseInputProps {
  showFeedback: boolean
  type: 'text' | 'password' | 'email' | 'number' | 'file' | 'date' | 'color' | 'checkbox' | 'radio' | 'range' | 'search' | 'tel' | 'url';
  className?: string
  style?: Record<string, string | number>
  size?: 'small' | 'medium' | 'large'
  errorMessage?: string
  pass?: string
  fail?: string
  placeHolder?: string
  onInput?: (e: Event) => void
}

export interface PlaceHolderMap {
  [key: string]: string;
}