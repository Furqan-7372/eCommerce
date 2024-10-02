import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import CustomText from '../CustomText/CustomText';
import {IHomeScreenTiles} from '../../Interfaces/index'
import Colors from '../../Utils/color';
import Fonts from '../../Assets/Fonts/index';

const HomeScreenTiles: React.FC<IHomeScreenTiles> = ({
  imageSource,
  text,
  textColor = Colors.primary0,
  fontSize = 45,
  alignment = 'center',
  justify= 'center',
  containerStyle,
}) => {
  return (
    <ImageBackground source={imageSource} style={[styles.image, containerStyle]}>
      <View style={[styles.textContainer, { alignItems: alignment, justifyContent: justify, }]}>
        <CustomText color={textColor} fontSize={fontSize} fontFamily={Fonts.metropolisBold}>
          {text}
        </CustomText>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
});

export default HomeScreenTiles;
