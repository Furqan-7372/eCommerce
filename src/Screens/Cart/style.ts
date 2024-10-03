import { StyleSheet } from 'react-native';
import Colors from '../../Utils/color';
import {height, width} from '../../Utils/dimensions'

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
    alignItems: 'center',
  },
});


export default styles