import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import ProductTile from '../../Components/ProductTile';
import images from '../../Assets/Images';
import HomeScreenTiles from '../../Components/HomeScreenTiles';
import {
  IProductDetailsScreen,
  IProductsScreen,
  ProductsStackParamList,
} from '../../Interfaces';
import {height, width} from '../../Utils/dimensions';
import Colors from '../../Utils/color';
import styles from './style';

const ProductsScreen: React.FC<IProductsScreen> = ({navigation}) => {
  const route = useRoute<RouteProp<ProductsStackParamList, 'Products'>>();
  const {name, products} = route.params;

  console.log('ProductsScreen', products);
  console.log('ProductsScreen  nameeeeeeeee', name);

  const handlePress = (productDetails: IProductDetailsScreen['product']) => {
    navigation.navigate('ProductDetails', {productDetails: productDetails});
  };

  const renderItem = ({item}: {item: IProductDetailsScreen['product']}) => (
    <TouchableOpacity
      style={styles.tileContainer}
      onPress={() => handlePress(item)}>
      <ProductTile
        image={item?.image}
        productName={item?.title}
        price={item.price}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HomeScreenTiles
          textColor={Colors.primary0}
          fontSize={height * 0.0475}
          alignment="flex-start"
          justify="flex-end"
          containerStyle={{width: width, height: height * 0.25}}
          imageSource={images.home.home2}
          text={name}
        />
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

export default ProductsScreen;
