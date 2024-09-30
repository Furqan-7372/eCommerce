import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../CustomText/CustomText';
import {ImageSourcePropType} from 'react-native'; // Import this if using static images
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Dimensions} from 'react-native';
import Fonts from '../../Assets/Fonts/index'

let {width} = Dimensions.get('window');

type CartTileProps = {
  itemName: string;
  imageSource: ImageSourcePropType; // If using static images
  color: string;
  size: 'L' | 'M' | 'S' | string; // Correct union type syntax
  basePrice: number;
};

const CartTile: React.FC<CartTileProps> = ({
  itemName,
  imageSource,
  color,
  size,
  basePrice,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(basePrice);
  function quantityPlusHandler(){
    setQuantity(quantity+1)
    setPrice(basePrice*quantity)
  }
  function quantityMinusHandler(){
    if (quantity>1) {
      setQuantity(quantity-1)
      setPrice(basePrice*quantity)
    }
  }
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <View style={styles.nameOptionsContainer}>
          <CustomText fontSize={20} fontFamily={Fonts.metropolisSemiBold}>
            {itemName}
          </CustomText>
          <TouchableOpacity onPress={()=>console.log('More Options Pressed')}>
            <SimpleLineIcons name="options-vertical" size={20} color={'grey'} />
          </TouchableOpacity>
        </View>
        <View style={styles.colorSizeContainer}>
          <View style={styles.colorContainer}>
            <CustomText fontFamily={Fonts.metropolisRegular}>
              Color:{' '}
            </CustomText>
            <CustomText
              fontWeight={'bold'}
              fontFamily={Fonts.metropolisRegular}>
              {color}
            </CustomText>
          </View>
          <View style={styles.sizeContainer}>
            <CustomText fontFamily={Fonts.metropolisRegular}>Size: </CustomText>
            <CustomText
              fontWeight={'bold'}
              fontFamily={Fonts.metropolisRegular}>
              {size}
            </CustomText>
          </View>
        </View>
        <View style={styles.quantityPriceContainer}>
          <View style={styles.quantityButtonContainer}>
          <TouchableOpacity onPress={quantityMinusHandler}>
            <SimpleLineIcons name="minus" size={40} color={'grey'} />
          </TouchableOpacity>
            <CustomText>{quantity}</CustomText>
            <TouchableOpacity onPress={quantityPlusHandler}>
            <SimpleLineIcons name="plus" size={40} color={'grey'} />
          </TouchableOpacity>
          </View>
          <CustomText>{price}$</CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.93,
    height: 104,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // You can adjust this as per your theme
    borderRadius: 4,
    marginVertical: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  nameOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  colorSizeContainer: {
    flexDirection: 'row',
  },

  colorContainer: {
    flexDirection: 'row',
    paddingRight: 5,
  },
  sizeContainer: {
    paddingLeft: 5,
    flexDirection: 'row',
  },

  quantityPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  quantityButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 46,
    width: width * 0.4,
  },
  itemImage: {
    width: 123,
    height: 151,
  },
});

export default CartTile;
