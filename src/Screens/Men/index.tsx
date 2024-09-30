// HomeScreen.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IMen} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile/CategoryTile';
import images from '../../Assets/Images';
import SummerSaleBanner from '../../Components/SummerSaleBanner/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';


const Men: React.FC<IMen> = () => {
  const navigation = useNavigation();

  const handleCategoryClick = (categoryId: string) => {
    navigation.navigate('ProductsStack', {categoryId});
  };
  return (
    <View style={styles.container}>
      <SummerSaleBanner />
      <CategoryTile
        onPress={() => handleCategoryClick("New")}
        categoryName="New"
        imageSource={images.newItem1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick("Shirts")}
        categoryName="Shirts"
        imageSource={images.cloth1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick("Shoes")}
        categoryName="Shoes"
        imageSource={images.shoes1}
      />
      <CategoryTile
        onPress={() => handleCategoryClick("Accesories")}
        categoryName="Accesories"
        imageSource={images.home2}
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
