import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import images from '../../Assets/Images';
import HomeScreenText from '../Text/HomeScreenText';
import { Dimensions } from 'react-native';
import Colors from '../../Utils/color';

const { width, height } = Dimensions.get('window');

const HomeScreenTile1: React.FC = () => {
  return (
    <ImageBackground source={images.home1} style={styles.image}>
        <View style={styles.textContainer} >

      <HomeScreenText color='white' fontSize={45} >New Collection</HomeScreenText>
        </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({  
  image: {
    flex: 1,
    width: width,
    height: height*0.5,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingBottom: 20,
  },
});

export default HomeScreenTile1;
