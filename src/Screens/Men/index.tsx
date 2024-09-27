// HomeScreen.tsx
import React from 'react';
import {Text, View} from 'react-native';
import styles from './style'; // Import your styles
import CustomText from '../../Components/Text';
import ImageTextTile from '../../Components/HomeScreenTiles/HomeScreenTiles';
import images from '../../Assets/Images';
import {Dimensions} from 'react-native';
import {IMen} from '../../Interfaces/index'
import CategoryTile from '../../Components/CategoryTile/CategoryTile';


const {width, height} = Dimensions.get('window');

const Men: React.FC<IMen> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <CustomText>Summer Sales</CustomText>
        <CustomText>Upto 50% Off</CustomText>
      </View>
      <CategoryTile
      categoryName='Shoes'
      imageSource={images.shoes1}
      />
      <CategoryTile
      categoryName='Shirts'
      imageSource={images.cloth1}
      />
      <CategoryTile
      categoryName='New'
      imageSource={images.newItem1}
      />
      <View>
        
      </View>
    </View>
  );
};

export default Men;
