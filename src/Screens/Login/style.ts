import {StyleSheet} from 'react-native';
import {height, width} from '../../Utils/dimensions';
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.15,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'flex-start',
    paddingLeft: width * 0.1,
    paddingBottom: height * 0.12,
    width: width,
  },
  nameContainer: {
    alignItems: 'center',
    margin: 5,
  },
  nameInput: {
    width: width * 0.85,
    backgroundColor: Colors.primary0,
    padding: 20,
  },
  passwordContainer: {
    alignItems: 'center',
    margin: 5,
  },
  passwordInput: {
    padding: 20,
    width: width * 0.85,
    backgroundColor: Colors.primary0,
  },
  buttonContainer: {
    height: height * 0.06,
    marginVertical: 35,
  },
});

export default styles;
