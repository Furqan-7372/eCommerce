// HomeScreen.tsx
import React from 'react';
import {View} from 'react-native';
import {IWomen} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile/CategoryTile';
import images from '../../Assets/Images';
import {StyleSheet} from 'react-native';
import SummerSaleBanner from '../../Components/SummerSaleBanner/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';
import products from '../../Utils/data';

const Women: React.FC<IWomen> = () => {
  const navigation = useNavigation();

  const { women } = products

  const handleCategoryClick = (productsCategory: {}) => {
    navigation.navigate('ProductsStack', {screen: 'Products', params: {productsCategory},});
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Women;
