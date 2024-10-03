import React from 'react';
import {View} from 'react-native';
import {IChildrenScreen} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile';
import images from '../../Assets/Images';
import SummerSaleBanner from '../../Components/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';
import products from '../../Utils/data';
import styles from './style';

const Children: React.FC<IChildrenScreen> = () => {
  const navigation = useNavigation();

  const {children} = products;

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
        onPress={() => handleCategoryClick(children.newProducts)}
        categoryName="New"
        imageSource={images.children.newItem1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(children.shirts)}
        categoryName="Shirts"
        imageSource={images.children.cloth1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(children.shoes)}
        categoryName="Shoes"
        imageSource={images.children.shoes1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick(children.accessories)}
        categoryName="Accesories"
        imageSource={images.children.accessories1}
      />
    </View>
  );
};

export default Children;
