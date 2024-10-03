import React from 'react';
import {View, Image} from 'react-native';
import CustomText from '../CustomText';
import Fonts from '../../Assets/Fonts/index';
import {IProductTile} from '../../Interfaces';
import Colors from '../../Utils/color';
import styles from './style';

const ProductTile: React.FC<IProductTile> = ({
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
          color={Colors.primary200}>
          {price}
        </CustomText>
      </View>
    </View>
  );
};

export default ProductTile;
