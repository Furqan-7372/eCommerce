import {StyleSheet} from 'react-native'
import { width } from '../../Utils/dimensions';
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
    container: {
      width: width * 0.93,
      height: 104,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: Colors.primary0,
      borderRadius: 4,
      marginVertical: 14,
      shadowColor: Colors.primary50,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      overflow: 'hidden',
    },
    textContainer: {
      flex: 1,
      padding: 10,
    },
    nameOptionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    colorSizeContainer: {
      flexDirection: 'row',
    },
  
    colorContainer: {
      flexDirection: 'row',
      paddingRight: 5,
    },
    sizeContainer: {
      paddingLeft: 5,
      flexDirection: 'row',
    },
  
    quantityPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    quantityButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 46,
      width: width * 0.4,
    },
    itemImage: {
      width: 123,
      height: 151,
    },
  });

export default styles