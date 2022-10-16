export interface IInputBoxProps {
  isInvalid: boolean;
  secure: boolean;
  label: string;
  hint?: string;
  type: 'text' | 'password' | 'email';
  error?: string;
  name: string;
  value: any;
  onChangeText: (e: any) => void;
  onBlur: (e: any) => void;
}

export interface ISmallInputBoxProps {
  isInvalid: boolean;
  type: 'text' | 'password' | 'email';
  error?: string;
  name: string;
  value: any;
  onChangeText: (e: any) => void;
  onBlur: (e: any) => void;
}

export interface ISelectBoxProps {
  isInvalid: boolean;
  label: string;
  hint?: string;
  error?: string;
  name: string;
  value: any;
  options: any[];
}
