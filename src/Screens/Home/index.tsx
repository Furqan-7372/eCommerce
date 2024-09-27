import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CustomText from '../../Components/Text';
import ImageTextTile from '../../Components/HomeScreenTiles/HomeScreenTiles';
import images from '../../Assets/Images';
import {Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

height = height - 60

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.leftTopContainer}>
            <CustomText color="red" fontSize={45}>
              Summer sale
            </CustomText>
          </View>
          <View style={styles.leftBottomContainer}>
            <ImageTextTile
              imageSource={images.home3}
              text="Black"
              textColor="white"
              fontSize={45}
              alignment="flex-start"
              justify="flex-end"
              containerStyle={{height: height * 0.25, width: width * 0.5}}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <ImageTextTile
            imageSource={images.home2}
            text="Men's hoodies"
            textColor="white"
            fontSize={45}
            alignment="center"
            containerStyle={{width: width * 0.5, height: height * 0.5}}
          />
        </View>
      </View>
      <View style={styles.topContainer}>
        <ImageTextTile
          imageSource={images.home1}
          text="New Collection"
          textColor="white"
          fontSize={45}
          alignment="flex-end"
          justify="flex-end"
          containerStyle={{width: width, height: height * 0.5}}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
