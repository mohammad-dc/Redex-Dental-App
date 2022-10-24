import {colorTypes} from '../../types/colors';

export interface IInputBoxProps {
  isInvalid: boolean;
  secure: boolean;
  label: string;
  hint?: string;
  type: 'text' | 'password' | 'email';
  error?: string;
  name: string;
  value: any;
  bg?: colorTypes;
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
  bg?: colorTypes;
  options: any[];
}

export interface ISearchBoxProps {
  hint: string;
  name: string;
  value: string;
  isFull?: boolean;
  onChangeText: (e: any) => void;
}
