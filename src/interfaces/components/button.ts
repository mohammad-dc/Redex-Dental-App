export interface IButtonProps {
  isLoading?: boolean;
  isLoadingText?: string;
  style?: 'normal' | 'primary' | 'disabled' | 'outline';
  text: string;
  onPress?: (e: any) => void;
}
