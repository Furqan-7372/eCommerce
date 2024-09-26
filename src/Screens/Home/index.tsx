import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView, Image} from 'react-native';
import styles from './style'; // Import your styles
import images from '../../Assets/Images';
import HomeScreenText from '../../Components/Text/HomeScreenText';
import HomeScreenTile1 from '../../Components/HomeScreenTiles/HomeScreenTile1';
import HomeScreenTile2 from '../../Components/HomeScreenTiles/HomeScreenTile2';
import HomeScreenTile3 from '../../Components/HomeScreenTiles/HomeScreenTile3';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.leftTopContainer}>
            <HomeScreenText color='red' fontSize={45} >Summer sale</HomeScreenText>
          </View>
          <View style={styles.leftBottomContainer}>
            <HomeScreenTile3 />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <HomeScreenTile2 /> 
        </View>
      </View>
      <View style={styles.topContainer}>
        <HomeScreenTile1 />
      </View>
    </View>
  );
};

export default HomeScreen;
