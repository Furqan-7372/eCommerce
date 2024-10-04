import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';
import CustomText from '../../Components/CustomText';
import {height} from '../../Utils/dimensions';
import {ILoginScreen} from '../../Interfaces/index';
import SubmitButton from '../../Components/SubmitButtom';
import Fonts from '../../Assets/Fonts/index';
import { loginUser } from '../../Services/index';
import {useDispatch} from 'react-redux';
import {login} from '../../Redux/Slices/AuthSlice'


const LoginScreen: React.FC<ILoginScreen> = () => {
  const dispatch = useDispatch();

  const handleOnPress = async () => {
    try {
      const data = await loginUser('tom@mailinator.com', '12345678')
      console.log(data)
      dispatch(login(data))
    } catch (error) {
      console.log('Error during login', error);
    }
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
