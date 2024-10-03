import React from 'react';
import {View} from 'react-native';
import {IMenScreen} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile';
import images from '../../Assets/Images';
import SummerSaleBanner from '../../Components/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';
import products from '../../Utils/data';
import styles from './style';

const Men: React.FC<IMenScreen> = () => {
  const navigation = useNavigation();

  const {men} = products;

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
        onPress={() => handleCategoryClick(men.newProducts)}
        categoryName="New"
        imageSource={images.men.newItem1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(men.shirts)}
        categoryName="Shirts"
        imageSource={images.men.cloth1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(men.shoes)}
        categoryName="Shoes"
        imageSource={images.men.shoes1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(men.accessories)}
        categoryName="Accesories"
        imageSource={images.men.accessories1}
      />
    </View>
  );
};

export default Men;
