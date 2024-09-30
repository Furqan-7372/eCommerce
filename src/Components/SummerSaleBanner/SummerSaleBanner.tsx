import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../CustomText/CustomText';
import {Dimensions} from 'react-native';
import Fonts from '../../Assets/Fonts/index'
import {ISummerSaleBanner} from '../../Interfaces/index'

let {width, height} = Dimensions.get('window');


const SummerSaleBanner: React.FC<ISummerSaleBanner> = () => {
  return (
<View  style={styles.container}>
    <CustomText color='white' fontFamily={Fonts.metropolisSemiBold} fontSize={30} >SUMMER SALES</CustomText>
    <CustomText color='white' fontFamily={Fonts.metropolisMedium} fontSize={20} >Up to 50% off</CustomText>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width*0.9,
    height: height * 0.14,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default SummerSaleBanner;
