export interface UseInputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'file' | 'date' | 'color' | 'checkbox' | 'radio' | 'range' | 'search' | 'tel' | 'url';
  className?: string
  style?: Record<string, string | number>
  size?: 'small' | 'medium' | 'large'
  errorMessage?: string
  placeHolder?: string
  onInput?: (e: Event) => void
}

export interface PlaceHolderMap {
  [key: string]: string;
}