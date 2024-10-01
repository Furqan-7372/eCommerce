import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProductTile from '../../Components/ProductTile/ProductTile';
import images from '../../Assets/Images';
import HomeScreenTiles from '../../Components/HomeScreenTiles/HomeScreenTiles';
import { IProductsScreen } from '../../Interfaces';

let {width, height} = Dimensions.get('window');

// const products = [
//   {id: '1', name: 'Product 1', price: '$19.99', image: images.cloth1},
//   {id: '2', name: 'Product 2', price: '$29.99', image: images.cloth2},
//   {id: '3', name: 'Product 3', price: '$39.99', image: images.cloth3},
//   {id: '4', name: 'Product 4', price: '$49.99', image: images.cloth1},
//   {id: '5', name: 'Product 5', price: '$59.99', image: images.cloth2},
//   {id: '6', name: 'Product 6', price: '$69.99', image: images.cloth3},
// ];

const ProductsScreen: React.FC<IProductsScreen> = () => {
  const navigation = useNavigation();

  const route = useRoute()
  const {productsCategory} = route.params || { label: 'No Category', data: [] };


  const handlePress = (productDetails: any) => {
    navigation.navigate('ProductDetails', {productDetails: productDetails});
  };

  // Render item separated out as a function
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.tileContainer}
      onPress={() => handlePress(item)}>
      <ProductTile
        image={item.images}
        productName={item.name}
        price={item.price}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HomeScreenTiles
          textColor="white"
          fontSize={45}
          alignment='flex-start'
          justify="flex-end"
          containerStyle={{width: width, height: height * 0.25}}
          imageSource={images.home.home2}
          text={productsCategory.label}
        />
      </View>
      <View style={styles.flatlistContainer} >
        <FlatList
          data={productsCategory.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    width: width,
  },
  flatlistContainer: {
    flex: 3,
  },
  row: {
    justifyContent: 'space-evenly',
  },
  tileContainer: {
    padding: 5,
    width: width * 0.45,
  },
});

export default ProductsScreen;
