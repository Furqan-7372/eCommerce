import {TouchableOpacity} from 'react-native';
import CustomText from '../CustomText';
import {height} from '../../Utils/dimensions';
import Fonts from '../../Assets/Fonts/index';
import Colors from '../../Utils/color';
import styles from './style';
import {ISubmitButton} from '../../Interfaces';

const SubmitButton: React.FC<ISubmitButton> = ({
    onPress,
  text,
  textColor= Colors.primary0,
  bgColor= Colors.primary200,
  fontFamily = Fonts.metropolisMedium,
  fontSize = height * 0.0167,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: bgColor}]}>
      <CustomText fontSize={fontSize} fontFamily={fontFamily} color={textColor}> 
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

export default SubmitButton;
