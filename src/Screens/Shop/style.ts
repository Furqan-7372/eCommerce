import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Colors from '../../Utils/color';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column-reverse',
      backgroundColor: 'white'
    },
    topContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    rightContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftContainer: {
    },
    leftTopContainer: {
      flex: 1,
      width: width*0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftBottomContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles