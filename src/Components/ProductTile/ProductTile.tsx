import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import CustomText from '../CustomText/CustomText';
import Fonts from '../../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom';

let {width, height} = Dimensions.get('window');

interface ProductTileProps {
  image: any; // Replace with a more specific type if needed
  productName: string;
  price: string;
}

const ProductTile: React.FC<ProductTileProps> = ({
  image,
  productName,
  price,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <CustomText fontSize={18} fontFamily={Fonts.metropolisSemiBold}>
          {productName}
        </CustomText>
        <CustomText
          fontSize={16}
          fontFamily={Fonts.metropolisMedium}
          color="red">
          {price}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
  },
  image: {
    width: width * 0.38,
    height: height * 0.25, // Adjust the height as needed
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    margin: 5,
    paddingHorizontal: 5,
  },
});

export default ProductTile;
