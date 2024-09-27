import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Colors from '../../Utils/color';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      width: width,
      height: height,
      flexDirection: 'column-reverse',
      backgroundColor: Colors.primary0
    },
    topContainer: {
      flex: 1,
      width: width,
      height: height*0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      flex: 1,
      width: width,
      height: height*0.5,
      flexDirection: 'row',
    },
    rightContainer: {
      flex: 1,
      width: width*0.5,
      height: height*0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftContainer: {
      width: width*0.5,
      height: height*0.5,
    },
    leftTopContainer: {
      flex: 1,
      width: width*0.5,
      height: height*0.25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftBottomContainer: {
      flex: 1,
      width: width*0.5,
      height: height*0.25,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles