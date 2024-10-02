import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import ProductTile from '../../Components/ProductTile/ProductTile';
import images from '../../Assets/Images';
import HomeScreenTiles from '../../Components/HomeScreenTiles/HomeScreenTiles';
import {IProductDetailsScreen, IProductsScreen, ProductsStackParamList} from '../../Interfaces';

let {width, height} = Dimensions.get('window');



const ProductsScreen: React.FC<IProductsScreen> = ({navigation}) => {

  const route = useRoute<RouteProp<ProductsStackParamList, 'Products'>>();
  const {productsCategory} = route.params

  const handlePress = (productDetails: IProductDetailsScreen['product']) => {
    navigation.navigate('ProductDetails', {productDetails});
  };

  // Render item separated out as a function
  const renderItem = ({item}: {item: IProductDetailsScreen['product']}) => (
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
          alignment="flex-start"
          justify="flex-end"
          containerStyle={{width: width, height: height * 0.25}}
          imageSource={images.home.home2}
          text={productsCategory.label}
        />
      </View>
      <View style={styles.flatlistContainer}>
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
