import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList, ListRenderItem} from 'react-native';
import CartTile from '../../Components/CartTile';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from '../../Components/CustomText';
import Fonts from '../../Assets/Fonts';
import {CartItem, ICartScreen} from '../../Interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart} from '../../Redux/Slices/CartSlice';
import {RootState} from '../../Redux/Store/Store';
import styles from './style';
import Colors from '../../Utils/color';
import {height} from '../../Utils/dimensions';
import SubmitButton from '../../Components/SubmitButtom';

const CartScreen: React.FC<ICartScreen> = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart.items);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotal = () => {
    setTotalAmount(
      cartData.reduce(
        (sum: number, item: CartItem) => sum + item.price * item.quantity,
        0,
      ),
    );
    return cartData
      .reduce(
        (sum: number, item: CartItem) => sum + item.price * item.quantity,
        0,
      )
      .toFixed(2);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.totalAmountContainer}>
          <CustomText
            fontSize={height * 0.021}
            fontFamily={Fonts.metropolisMedium}>
            Total amount:
          </CustomText>
          <CustomText
            fontSize={height * 0.025}
            fontFamily={Fonts.metropolisSemiBold}>
            $ {calculateTotal()}
          </CustomText>
        </View>

        <View style={styles.checkoutButton}>
          <SubmitButton
            onPress={() => console.log('Check Out Pressed')}
            text="CHECK OUT"
          />
        </View>
      </View>
    );
  };

  const renderItem: ListRenderItem<CartItem> = ({item}) => {
    return (
      <CartTile
        imageSource={item.images}
        itemName={item.name}
        sizes={item.selectedSize}
        colors={item.selectedColor}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity onPress={() => console.log('Search Pressed')}>
          <Fontisto name="search" size={30} color={Colors.primary50} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <CustomText fontSize={height * 0.042} fontFamily={Fonts.metropolisBold}>
          My Bag
        </CustomText>
        <TouchableOpacity onPress={handleClearCart}>
          <AntDesign name="delete" size={30} color={Colors.backgroundColor} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter} // Footer for total and checkout
      />
    </View>
  );
};

export default CartScreen;
