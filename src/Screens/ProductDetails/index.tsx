import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../Components/CustomText/CustomText'; // Import your CustomText component
import Fonts from '../../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom';
import {IProductDetails} from '../../Interfaces';
import {useNavigation, useRoute} from '@react-navigation/native';

let {width, height} = Dimensions.get('window');

// import images from '../../Assets/Images';
// import {StackScreenProps} from '@react-navigation/stack';
// interface ProductDetailProps extends StackScreenProps<any> {
//   route: {
//     params: {
//       productName: string;
//     };
//   };
// }

// const name='home'

const ProductDetailScreen: React.FC<IProductDetails> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {productDetails} = route.params;
  const {name, price, sizes, colors, images} = productDetails;
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');

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
          <MaterialIcons name="share" size={25} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.imageScrollContainer}>
        <Image source={images} style={styles.image} />
        <Image source={images} style={styles.image} />
        <Image source={images} style={styles.image} />
      </ScrollView>

      <View style={styles.dropdownContainer}>
        <View style={styles.dropdown}>
          <Picker
            style={styles.pickerText}
            selectedValue={selectedSize}
            onValueChange={itemValue => setSelectedSize(itemValue)}>
            <Picker.Item label="Size" value="" />
            <Picker.Item label="S" value="S" />
            <Picker.Item label="M" value="M" />
            <Picker.Item label="L" value="L" />
          </Picker>
        </View>

        <View style={styles.dropdown}>
          <Picker
            style={styles.pickerText}
            selectedValue={selectedColor}
            onValueChange={itemValue => setSelectedColor(itemValue)}>
            <Picker.Item label="Color" value="" />
            <Picker.Item label="Black" value="black" />
            <Picker.Item label="White" value="white" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
          <TouchableOpacity onPress={()=>{console.log('Added to Fav')}} style={styles.favouriteIconContainer}>
            <MaterialIcons name="favorite-border" size={25} color={'grey'} />
          </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <View style={styles.productNamePriceContainer}>
          <CustomText
            fontSize={26}
            fontFamily={Fonts.metropolisSemiBold}
            fontWeight="bold">
            {name}
          </CustomText>
          <CustomText fontFamily={Fonts.metropolisSemiBold} fontSize={26}>
            $ {price}
          </CustomText>
        </View>
        <CustomText
          fontSize={16}
          fontFamily={Fonts.metropolisMedium}
          color="#666"
          margin={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CustomText>
      </View>

      <TouchableOpacity onPress={()=>{console.log('Added to Cart')}} style={styles.addToCartButton}>
        <CustomText fontSize={18} color="#fff">
          Add to Cart
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageScrollContainer: {
    marginVertical: 10,
  },
  image: {
    width: width * 0.7,
    height: height * 0.5,
    margin: 2,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    width: '40%',
  },
  pickerText: {
    fontSize: 16,
    fontFamily: Fonts.metropolisMedium,
  },
  favouriteIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  productInfo: {
    marginVertical: 20,
  },
  productNamePriceContainer: {
    width: '97%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconContainer: {
    marginRight: 15,
  },
});

export default ProductDetailScreen;
