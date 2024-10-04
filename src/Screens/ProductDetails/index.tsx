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

  console.log('Details =>>>>>>', productDetails);

  const {id, title, price, description, image} = productDetails;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        quantity: 1,
        price,
        title,
        image,
        description,
      }),
    );
    Alert.alert('Added to Cart', 'You can continue Shopping');
  };

  const handleShare = () => {
    console.log('Share icon pressed!');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity
          onPress={handleShare}
          style={styles.headerIconContainer}>
          <MaterialIcons name="share" size={25} color={Colors.primary50} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.imageScrollContainer}>
          <Image source={{uri: image}} style={styles.image} />
          <Image source={{uri: image}} style={styles.image} />
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </ScrollView>

      <View style={styles.productInfo}>
        <View style={styles.productNamePriceContainer}>
          <CustomText
            fontSize={height * 0.0273}
            fontFamily={Fonts.metropolisSemiBold}
            fontWeight="bold">
            {title}
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
          {description}
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
