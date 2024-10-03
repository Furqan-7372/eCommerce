import { StyleSheet } from 'react-native';
import {height, width} from '../../Utils/dimensions'
import Colors from '../../Utils/color';
import Fonts from '../../Assets/Fonts/index';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary0,
    padding: 20,
  },
  imageScrollContainer: {
    flexDirection: 'row',
  },
  image: {
    width: width * 0.7,
    height: height * 0.60,
    margin: 2,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    width: '40%',
  },
  pickerText: {
    fontSize: height*0.0167,
    fontFamily: Fonts.metropolisMedium,
  },
  favouriteIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  productInfo: {
    marginVertical: 20,
  },
  productNamePriceContainer: {
    width: '97%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    alignItems: 'center',
  },
  headerIconContainer: {
    marginRight: 15,
  },
});

export default styles