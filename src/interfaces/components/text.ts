import {colorTypes} from '../../types/colors';
import {fontTypes} from '../../types/fonts';
import {textSizeTypes} from '../../types/sizes';

export interface ITextProps {
  value: string;
  size?: textSizeTypes;
  color?: colorTypes;
  family?: fontTypes;
}
