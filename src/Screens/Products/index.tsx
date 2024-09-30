import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductTile from '../../Components/ProductTile/ProductTile';
import images from '../../Assets/Images';

const products = [
  { id: '1', name: 'Product 1', price: '$19.99', image: images.cloth1 },
  { id: '2', name: 'Product 2', price: '$29.99', image: images.cloth2 },
  { id: '3', name: 'Product 3', price: '$39.99', image: images.cloth3 },
  { id: '4', name: 'Product 4', price: '$49.99', image: images.cloth1 },
  { id: '5', name: 'Product 5', price: '$59.99', image: images.cloth2 },
  { id: '6', name: 'Product 6', price: '$69.99', image: images.cloth3 },
];

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductTile
            image={item.image}
            productName={item.name}
            price={item.price}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: 'space-between', // To ensure spacing between columns
  },
});

export default ProductsScreen;
