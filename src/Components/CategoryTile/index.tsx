import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import CustomText from '../CustomText';
import {height} from '../../Utils/dimensions'
import Fonts from '../../Assets/Fonts/index';
import {CategoryTileProps} from '../../Interfaces/index'
import styles from './style';

const CategoryTile: React.FC<CategoryTileProps> = ({
  categoryName,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <View style={styles.innerTextContainer}>
          <CustomText fontFamily={Fonts.metropolisSemiBold} fontSize={height*0.0210} >{categoryName}</CustomText>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.categoryImage} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryTile;
