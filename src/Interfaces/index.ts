// index.ts
import { TextProps, TextStyle, ImageSourcePropType, ViewStyle, StyleProp } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

// Interface for custom text components
export interface ICustomText extends TextProps {
  children: React.ReactNode;
  fontSize?: number;
  color?: string;
  fontWeight?: TextStyle['fontWeight']; 
  fontFamily?: TextStyle['fontFamily'];
  padding?: number
  margin?: number
}

export interface IHomeScreen {
}

// Interface for home screen tiles
export interface IHomeScreenTiles {
  imageSource: ImageSourcePropType;  // Corrected the image source type
  text: string;
  textColor?: string;
  fontSize?: number;
  justify?: 'flex-start' | 'center' | 'flex-end';
  alignment?: 'flex-start' | 'center' | 'flex-end';
  containerStyle?: StyleProp<ViewStyle>;
}

// Interface for StoreNavigator
export interface IStoreNavigator {
  
}

export interface ISummerSaleBanner {

}

export interface IProductsScreen {
  products: []
}

export interface IProductDetails {
  product: {
    id: string;
    name: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: ImageSourcePropType;
  };
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
export interface IWomen {
  navigation: any
}
export interface IChildren {
  navigation: any
}