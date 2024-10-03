import React from 'react';
import {Text} from 'react-native';
import {ICustomText} from '../../Interfaces/index';
import Fonts from '../../Assets/Fonts';
import Colors from '../../Utils/color';
import {height} from '../../Utils/dimensions';
import styles from './style';

const CustomText: React.FC<ICustomText> = ({
  children,
  fontSize = height * 0.0145, // Default font size
  color = Colors.primary50, // Default color
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
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
