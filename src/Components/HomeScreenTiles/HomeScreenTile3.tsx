import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import images from '../../Assets/Images';
import HomeScreenText from '../Text/HomeScreenText';
import { Dimensions } from 'react-native';
import Colors from '../../Utils/color';

const { width, height } = Dimensions.get('window');

const HomeScreenTile3: React.FC = () => {
  return (
    <ImageBackground source={images.home3} style={styles.image}>
        <View style={styles.textContainer} >

      <HomeScreenText color='white' fontSize={45} >Black</HomeScreenText>
        </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({  
  image: {
    flex: 1,
    width: width * 0.5,
    height: height*0.25,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 25,
  },
});

export default HomeScreenTile3;
