import {StyleSheet} from 'react-native';
import {height, width} from '../../Utils/dimensions'
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'column-reverse',
    backgroundColor: Colors.primary0,
  },
  topContainer: {
    flex: 1,
    width: width,
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    width: width,
    height: height * 0.5,
    flexDirection: 'row',
  },
  containerStyle: {height: height * 0.25, width: width * 0.5},
  rightContainer: {
    flex: 1,
    width: width * 0.5,
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 1,
    width: width * 0.5,
    height: height * 0.5,
  },
  leftTopContainer: {
    flex: 1,
    width: width * 0.5,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBottomContainer: {
    flex: 1,
    width: width * 0.5,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
