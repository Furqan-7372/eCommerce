import React from 'react';
import {Text, TextProps, StyleSheet, View} from 'react-native';
import {ICustomText} from '../../Interfaces/index';
import Fonts from '../../Assets/Fonts';

const CustomText: React.FC<ICustomText> = ({
  children,
  fontSize,
  color,
  fontWeight = 'regular',
  fontFamily = Fonts.metropolisBlack,
  padding,
  margin,
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          color: color,
          fontSize: fontSize,
          flexWrap: 'wrap',
          fontWeight: fontWeight,
          fontFamily: fontFamily,
          padding: padding,
          margin: margin,
        },
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default CustomText;
