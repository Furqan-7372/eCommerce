import React from 'react';
import {View} from 'react-native';
import styles from './style';
import CustomText from '../../Components/CustomText';
import {height} from '../../Utils/dimensions';
import {ILoginScreen} from '../../Interfaces/index';
import {TextInput} from 'react-native';
import SubmitButton from '../../Components/SubmitButtom';
import Fonts from '../../Assets/Fonts/index';

const LoginScreen: React.FC<ILoginScreen> = () => {
  const handleOnPress = () => {
    console.log('LOGIN');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer} >
        <CustomText fontFamily={Fonts.metropolisBold} fontSize={height * 0.037}>
          Login
        </CustomText>
      </View>
      <View style={styles.nameContainer}>
        <TextInput style={styles.nameInput} placeholder='Email' />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder='Password' />
      </View>
      <View style={styles.buttonContainer}>
        <SubmitButton onPress={handleOnPress} text="LOGIN" />
      </View>
    </View>
  );
};

export default LoginScreen;
