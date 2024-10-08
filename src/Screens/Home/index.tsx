import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CustomText from '../../Components/CustomText';
import ImageTextTile from '../../Components/HomeScreenTiles';
import images from '../../Assets/Images';
import {IHomeScreen} from '../../Interfaces/index';
import {height, width} from '../../Utils/dimensions'
import Colors from '../../Utils/color';


const HomeScreen: React.FC<IHomeScreen> = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.leftTopContainer}>
            <CustomText color={Colors.primary200} fontSize={height*0.0475}>
              Summer sale
            </CustomText>
          </View>
          <View style={styles.leftBottomContainer}>
            <ImageTextTile
              imageSource={images.home.home3}
              text="Black"
              textColor={Colors.primary0}
              fontSize={height*0.0475}
              alignment="flex-start"
              justify="flex-end"
              containerStyle={styles.containerStyle}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <ImageTextTile
            imageSource={images.home.home2}
            text="Men's hoodies"
            textColor={Colors.primary0}
            fontSize={height*0.0475}
            alignment="center"
            containerStyle={{width: width * 0.5, height: height * 0.5}}
          />
        </View>
      </View>
      <View style={styles.topContainer}>
        <ImageTextTile
          imageSource={images.home.home1}
          text="New Collection"
          textColor={Colors.primary0}
          fontSize={height*0.0475}
          alignment="flex-end"
          justify="flex-end"
          containerStyle={{width: width, height: height * 0.5}}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
