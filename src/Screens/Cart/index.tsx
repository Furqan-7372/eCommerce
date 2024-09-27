import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Item = {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
};

const items: Item[] = [
  { id: 1, name: 'Pullover', color: 'Black', size: 'L', price: 51 },
  { id: 2, name: 'T-Shirt', color: 'Gray', size: 'L', price: 30 },
  { id: 3, name: 'Sport Dress', color: 'Black & White', size: 'M', price: 43 }
];

const BagScreen = () => {
  const calculateTotal = () => items.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bag</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          {/* Image would be dynamically loaded */}
          <Image source={{ uri: `image_url_for_${item.name}` }} style={styles.itemImage} />
          <View style={styles.itemDescription}>
            <Text>{item.name}</Text>
            <Text>Color: {item.color}</Text>
            <Text>Size: {item.size}</Text>
          </View>
          {/* Quantity Selector would be implemented here */}
          <Text style={styles.itemPrice}>{`${item.price}$`}</Text>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text>Total amount:</Text>
        <Text>{`${calculateTotal()}$`}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>CHECK OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  itemDescription: {
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  checkoutButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BagScreen;
