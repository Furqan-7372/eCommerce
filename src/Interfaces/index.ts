import {TextProps} from 'react-native'

export interface ICustomText extends TextProps {
    children: React.ReactNode;
    fontSize?: number;
    color?: string;
    weight: string;
  }