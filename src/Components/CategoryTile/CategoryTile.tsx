import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../CustomText/CustomText';
import {ImageSourcePropType} from 'react-native';
import {Dimensions} from 'react-native';
import Fonts from '../../Assets/Fonts/index';

let {width, height} = Dimensions.get('window');

type CategoryTileProps = {
  categoryName: string;
  imageSource: ImageSourcePropType; // If using static images
  onPress?: () => void;
};

const CategoryTile: React.FC<CategoryTileProps> = ({
  categoryName,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <View style={styles.innerTextContainer}>
          <CustomText fontFamily={Fonts.metropolisSemiBold} fontSize={20} >{categoryName}</CustomText>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.categoryImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * 0.9,
    height: height * 0.14,
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: '15%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoryImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default CategoryTile;
