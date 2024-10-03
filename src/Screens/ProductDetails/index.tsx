import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../Components/CustomText';
import Fonts from '../../Assets/Fonts/index';
import Colors from '../../Utils/color';
import {IProductDetailsScreen, ProductDetailsRouteProp} from '../../Interfaces';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/Slices/CartSlice';
import {height} from '../../Utils/dimensions';
import SubmitButton from '../../Components/SubmitButtom';

const ProductDetailScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<ProductDetailsRouteProp>();
  const {productDetails} = route.params as {
    productDetails: IProductDetailsScreen['product'];
  };
  const {id, name, price, sizes, colors, images} = productDetails;
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');

  const validateSelection = () => {
    if (selectedSize === 'Size' || selectedColor === 'Color') {
      Alert.alert('Selection Error', 'Please select size and color');
      return false;
    }
    return true;
  };

  const handleAddToCart = () => {
    const new_id = id + selectedColor + selectedSize;
    if (validateSelection()) {
      dispatch(
        addToCart({
          id: new_id,
          quantity: 1,
          selectedSize,
          selectedColor,
          price,
          name,
          images,
          colors,
          sizes,
        }),
      );
      Alert.alert('Added to Cart', 'You can continue Shopping');
    }
  };

  const handleShare = () => {
    console.log('Share icon pressed!');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity
          onPress={handleShare}
          style={styles.headerIconContainer}>
          <MaterialIcons name="share" size={25} color={Colors.primary50} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.imageScrollContainer}>
          <Image source={images} style={styles.image} />
          <Image source={images} style={styles.image} />
          <Image source={images} style={styles.image} />
        </View>
      </ScrollView>

      <View style={styles.dropdownContainer}>
        <View style={styles.dropdown}>
          <Picker
            style={styles.pickerText}
            selectedValue={selectedSize}
            onValueChange={itemValue => setSelectedSize(itemValue)}>
            <Picker.Item label="Select Size" value="" />
            {sizes.map((size: string, index: number) => (
              <Picker.Item key={index} label={size} value={size} />
            ))}
          </Picker>
        </View>

        <View style={styles.dropdown}>
          <Picker
            style={styles.pickerText}
            selectedValue={selectedColor}
            onValueChange={itemValue => setSelectedColor(itemValue)}>
            <Picker.Item label="Select Color" value="" />
            {colors.map((color: string, index: number) => (
              <Picker.Item key={index} label={color} value={color} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('Added to Fav');
          }}
          style={styles.favouriteIconContainer}>
          <MaterialIcons
            name="favorite-border"
            size={25}
            color={Colors.primary900}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <View style={styles.productNamePriceContainer}>
          <CustomText
            fontSize={height * 0.0273}
            fontFamily={Fonts.metropolisSemiBold}
            fontWeight="bold">
            {name}
          </CustomText>
          <CustomText
            fontFamily={Fonts.metropolisSemiBold}
            fontSize={height * 0.0273}>
            $ {price}
          </CustomText>
        </View>
        <CustomText
          fontSize={height * 0.0167}
          fontFamily={Fonts.metropolisMedium}
          color={Colors.primary900}
          margin={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CustomText>
      </View>

      <View style={styles.addToCartButton}>
        <SubmitButton
          onPress={handleAddToCart}
          text="Add to Cart"
          fontSize={height * 0.0187}
        />
      </View>
    </View>
  );
};

export default ProductDetailScreen;
