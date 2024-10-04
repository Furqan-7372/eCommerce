import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import CustomText from '../CustomText';
import {ICartTile} from '../../Interfaces';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {height} from '../../Utils/dimensions'
import Fonts from '../../Assets/Fonts/index';
import { useDispatch } from 'react-redux';
import Colors from '../../Utils/color';
import {removeFromCart, increaseQuantity, decreaseQuantity} from '../../Redux/Slices/CartSlice';
import styles from './style';


const CartTile: React.FC<ICartTile> = ({
  title,
  image,
  price,
  quantity,
  id,
}) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemPrice, setItemPrice] = useState(price);

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart({id: itemId}));
  };

  const quantityPlusHandler = () => {
    setItemQuantity(itemQuantity + 1);
    setItemPrice(price * (itemQuantity + 1));
    dispatch(increaseQuantity({id: id}))
  }

  const quantityMinusHandler = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      setItemPrice(price * (itemQuantity - 1));
      dispatch(decreaseQuantity({id: id}))
    }
  }

  useEffect(() => {
    setItemQuantity(quantity)
  }, [quantity])

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <View style={styles.nameOptionsContainer}>
          <CustomText fontSize={height*0.0210} fontFamily={Fonts.metropolisSemiBold}>
            {title}
          </CustomText>
          <TouchableOpacity onPress={()=>handleRemoveItem(id)}>
            <SimpleLineIcons name="options-vertical" size={20} color={Colors.primary900} />
          </TouchableOpacity>
        </View>
        <View style={styles.quantityPriceContainer}>
          <View style={styles.quantityButtonContainer}>
            <TouchableOpacity onPress={quantityMinusHandler}>
              <SimpleLineIcons name="minus" size={40} color={Colors.primary900} />
            </TouchableOpacity>
            <CustomText>{itemQuantity}</CustomText>
            <TouchableOpacity onPress={quantityPlusHandler}>
              <SimpleLineIcons name="plus" size={40} color={Colors.primary900} />
            </TouchableOpacity>
          </View>
          <CustomText>$ {itemPrice.toFixed(2)}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default CartTile;
