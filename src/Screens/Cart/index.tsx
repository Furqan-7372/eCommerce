import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import CartTile from '../../Components/CartTile/CartTile';
import images from '../../Assets/Images';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CustomText from '../../Components/CustomText/CustomText';
import Fonts from '../../Assets/Fonts';

let { width, height } = Dimensions.get('window');

const cartData = [
  {
    id: '1',
    imageSource: images.shoes2,
    itemName: 'Shoes 2',
    size: 'M',
    color: 'White',
    basePrice: 10,
  },
  {
    id: '2',
    imageSource: images.shoes2,
    itemName: 'Shoes 2',
    size: 'M',
    color: 'White',
    basePrice: 10,
  },
  {
    id: '3',
    imageSource: images.shoes2,
    itemName: 'Shoes 2',
    size: 'M',
    color: 'White',
    basePrice: 10,
  },
];


const CartScreen: React.FC = () => {
  // Calculate total price based on cart data
  const calculateTotal = () => {
    return cartData.reduce((sum, item) => sum + item.basePrice, 0);
  };

  // Render Footer for the FlatList
  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.totalAmountContainer}>
          <CustomText fontSize={20} fontFamily={Fonts.metropolisMedium}>Total amount:</CustomText>
          <CustomText fontSize={24} fontFamily={Fonts.metropolisSemiBold}>{calculateTotal()}$</CustomText>
        </View>

        <TouchableOpacity onPress={()=>console.log('Check Out Pressed')} style={styles.checkoutButton}>
          <CustomText fontSize={16} fontFamily={Fonts.metropolisMedium} color='white'>CHECK OUT</CustomText>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchButtonContainer}>
      <TouchableOpacity onPress={()=>console.log('Search Pressed')}>
        <Fontisto name="search" size={30} color={'black'} />
      </TouchableOpacity>
      </View>

      <CustomText fontSize={40} fontFamily={Fonts.metropolisBold} style={styles.header}>
        My Bag
      </CustomText>

      <FlatList
        data={cartData}
        renderItem={({ item }) => (
          <CartTile
            imageSource={item.imageSource}
            itemName={item.itemName}
            size={item.size}
            color={item.color}
            basePrice={item.basePrice}
          />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderFooter}  // Footer for total and checkout
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
    width: width,
    height: height * 0.93,
  },
  searchButtonContainer: {
    alignItems: 'flex-end',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 16,
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkoutButton: {
    padding: 16,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default CartScreen;
