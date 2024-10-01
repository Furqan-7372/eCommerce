// HomeScreen.tsx
import React from 'react';
import {View} from 'react-native';
import {IMen} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile/CategoryTile';
import images from '../../Assets/Images';
import {StyleSheet} from 'react-native';
import SummerSaleBanner from '../../Components/SummerSaleBanner/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';
import products from '../../Utils/data';

const Men: React.FC<IMen> = () => {
  const navigation = useNavigation();

  const { men } = products

  const handleCategoryClick = (productsCategory: {}) => {
    navigation.navigate('ProductsStack', {screen: 'Products', params: {productsCategory},});
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Men;
