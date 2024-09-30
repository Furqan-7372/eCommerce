import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProductTileProps {
  image: any; // Replace with a more specific type if needed
  productName: string;
  price: string;
}

const ProductTile: React.FC<ProductTileProps> = ({ image, productName, price }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 100, // Adjust the height as needed
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
});

export default ProductTile;
