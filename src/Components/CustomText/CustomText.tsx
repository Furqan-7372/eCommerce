import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ICustomText } from '../../Interfaces/index';
import Fonts from '../../Assets/Fonts';

const CustomText: React.FC<ICustomText> = ({
  children,
  fontSize = 14,  // Default font size
  color = '#000', // Default color
  fontWeight = 'regular',
  fontFamily = Fonts.metropolisBlack,
  padding = 0,
  margin = 0,
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize,
          color,
          fontWeight,
          fontFamily,
          padding,
          margin,
        },
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    flexWrap: 'wrap', // Ensures text wrapping if it overflows
  },
});

export default CustomText;
