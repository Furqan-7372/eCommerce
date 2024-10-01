// HomeScreen.tsx
import React from 'react';
import {View} from 'react-native';
import {IChildren} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile/CategoryTile';
import images from '../../Assets/Images';
import {StyleSheet} from 'react-native';
import SummerSaleBanner from '../../Components/SummerSaleBanner/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';
import products from '../../Utils/data';

const Children: React.FC<IChildren> = () => {
  const navigation = useNavigation();

  const { children } = products

  const handleCategoryClick = (productsCategory: {}) => {
    navigation.navigate('ProductsStack', {screen: 'Products', params: {productsCategory},});
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Children;
