import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Colors from '../../Utils/color';

const { width, height } = Dimensions.get('window');



const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
    width: width,
    height: height * 0.93,
  },
  searchButtonContainer: {
    alignItems: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    paddingVertical: 10,
  },
  footerContainer: {
    marginTop: 16,
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkoutButton: {
    padding: 16,
    backgroundColor: Colors.primary200,
    alignItems: 'center',
    borderRadius: 25,
  },
});


export default styles