// index.ts
import {
  TextProps,
  TextStyle,
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// Interfaces of Navigators

export interface IMainNavigator
  extends StackScreenProps<MainStackParamList, 'BottomNavigator'> {}

export interface IStoreNavigator {}

// Interfaces of ParamList

export type MainStackParamList = {
  Login: undefined;
  BottomNavigator: undefined;
  ProductsStack: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Store: undefined;
  Cart: undefined;
};

export type ProductsScreenNavigationProp = StackNavigationProp<
  ProductsStackParamList,
  'Products'
>;

export type ProductsStackParamList = {
  Products: {productsCategory: IProductsCategory};
  ProductDetails: {productDetails: IProductDetailsScreen['product']};
};

// Interfaces of Screen

export interface ILoginScreen {}

export interface IHomeScreen {}

export interface IStoreScreen {}

export interface ICartScreen {}

export interface IMenScreen {
  navigation: any;
}
export interface IWomenScreen {
  navigation: StackNavigationProp<ProductsStackParamList, 'Products'>;
}
export interface IChildrenScreen {
  navigation: any;
}

export type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  'ProductDetails'
>;

export interface IProductsScreen {
  navigation: ProductsScreenNavigationProp;
  products: IProductDetailsScreen['product'][];
}

export interface IProductDetailsScreen {
  product: {
    id: string;
    name: string;
    price: number;
    colors: [];
    sizes: [];
    images: ImageSourcePropType;
  };
}

// Interfaces of Components

export interface ICustomText extends TextProps {
  children: React.ReactNode;
  color?: TextStyle['color']
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  fontFamily?: TextStyle['fontFamily'];
  padding?: number;
  margin?: number;
}

export interface ISubmitButton {
  onPress: ()=>void
  text: string;
  textColor?: TextStyle['color']
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  fontFamily?: TextStyle['fontFamily'];
  bgColor?: ViewStyle['backgroundColor'];
}

export interface IHomeScreenTiles {
  imageSource: ImageSourcePropType;
  text: string;
  textColor?: string;
  fontSize?: number;
  justify?: 'flex-start' | 'center' | 'flex-end';
  alignment?: 'flex-start' | 'center' | 'flex-end';
  containerStyle?: StyleProp<ViewStyle>;
}

export interface IProductTile {
  image: ImageSourcePropType;
  productName: string;
  price: number;
}

export type ICartTile = {
  id: string;
  itemName: string;
  imageSource: ImageSourcePropType;
  colors: string;
  sizes: string;
  price: number;
  quantity: number;
};

export interface ISummerSaleBanner {}

// Interfaces of Data

export interface IProduct {
  id: string;
  name: string;
  price: number;
  colors: [];
  sizes: [];
  images: ImageSourcePropType;
}

export interface IProductsCategory {
  label: string;
  data: IProduct[];
}

export type CategoryTileProps = {
  categoryName: string;
  imageSource: ImageSourcePropType; // If using static images
  onPress?: () => void;
};

// Interfaces of Redux

export interface CartItem extends IProduct {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
