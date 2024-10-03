import React from 'react';
import { View, ImageBackground} from 'react-native';
import CustomText from '../CustomText';
import {IHomeScreenTiles} from '../../Interfaces/index'
import Colors from '../../Utils/color';
import Fonts from '../../Assets/Fonts/index';
import { height } from '../../Utils/dimensions';
import styles from './style';

const HomeScreenTiles: React.FC<IHomeScreenTiles> = ({
  imageSource,
  text,
  textColor = Colors.primary0,
  fontSize = height*0.0475,
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

export default HomeScreenTiles;
