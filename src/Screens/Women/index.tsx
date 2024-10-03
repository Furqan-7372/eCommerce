import React from 'react';
import {View} from 'react-native';
import {IWomenScreen, IProductsCategory} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile';
import images from '../../Assets/Images';
import SummerSaleBanner from '../../Components/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';
import products from '../../Utils/data';
import styles from './style';

const Women: React.FC<IWomenScreen> = () => {
  const navigation = useNavigation();

  const {women} = products;

  const handleCategoryClick = (productsCategory: {}) => {
    navigation.navigate('ProductsStack', {
      screen: 'Products',
      params: {productsCategory},
    });
  };

  return (
    <View style={styles.container}>
      <SummerSaleBanner />
      <CategoryTile
        onPress={() => handleCategoryClick(women.newProducts)}
        categoryName="New"
        imageSource={images.women.newItem1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(women.shirts)}
        categoryName="Shirts"
        imageSource={images.women.cloth1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(women.shoes)}
        categoryName="Shoes"
        imageSource={images.women.shoes1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(women.accessories)}
        categoryName="Accesories"
        imageSource={images.women.accessories1}
      />
    </View>
  );
};

export default Women;
