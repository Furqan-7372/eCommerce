import React from 'react';
import {View} from 'react-native';
import CustomText from '../CustomText';
import {height} from '../../Utils/dimensions';
import Fonts from '../../Assets/Fonts/index';
import {ISummerSaleBanner} from '../../Interfaces/index';
import Colors from '../../Utils/color';
import styles from './style';

const SummerSaleBanner: React.FC<ISummerSaleBanner> = () => {
  return (
    <View style={styles.container}>
      <CustomText
        color={Colors.primary0}
        fontFamily={Fonts.metropolisSemiBold}
        fontSize={height*0.0310}>
        SUMMER SALES
      </CustomText>
      <CustomText
        color={Colors.primary0}
        fontFamily={Fonts.metropolisMedium}
        fontSize={height*0.0210}>
        Up to 50% off
      </CustomText>
    </View>
  );
};

export default SummerSaleBanner;
