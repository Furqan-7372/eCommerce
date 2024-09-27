// index.ts

import { TextProps } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

// Interface for custom text components
export interface ICustomText extends TextProps {
  children: React.ReactNode;
  fontSize?: number;
  color?: string;
  weight?: string;
}

// Interface for home screen tiles
export interface IHomeScreenTiles {
  imageSource: any; // Consider specifying the type if possible (e.g., ImageSourcePropType)
  text: string;
  textColor?: string;
  fontSize?: number;
  justify?: 'flex-start' | 'center' | 'flex-end';
  alignment?: 'flex-start' | 'center' | 'flex-end';
  containerStyle?: object;
}

// Interface for StoreNavigator
export interface IStoreNavigator {
  
}

// Interface for GenderNavigator
export interface IGenderNavigator {
  
}

// Interface for Categories Screen
export interface ICategoriesProps {

}

// Interface for Products Screen
export interface IProductsProps {

}

// Interface for Product Details Screen
export interface IProductDetailsProps {

}

// Type for GenderNavigator props using StackScreenProps
export type GenderNavigatorProps = StackScreenProps<{
  Categories: undefined;
  Products: undefined;
  ProductDetails: { productId: string };
}>;

export interface IMen {
  navigation: any
}