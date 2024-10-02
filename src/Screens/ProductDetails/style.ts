import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Colors from '../../Utils/color';
import Fonts from '../../Assets/Fonts/index';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 16,
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
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconContainer: {
    marginRight: 15,
  },
});

export default styles