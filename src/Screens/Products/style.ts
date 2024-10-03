import { StyleSheet } from 'react-native';
import { width} from '../../Utils/dimensions'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    width: width,
  },
  flatlistContainer: {
    flex: 3,
  },
  row: {
    justifyContent: 'space-evenly',
  },
  tileContainer: {
    padding: 5,
    width: width * 0.45,
  },
  });

export default styles