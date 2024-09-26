import React from 'react'
import {Text, TextProps, StyleSheet, View} from 'react-native'
import {ICustomText} from '../../../Interfaces/index'
import Fonts from '../../../Assets/Fonts'


const CustomText: React.FC<ICustomText> = ({children, fontSize, color, weight= 'regular' }) => {
    return(
        <Text
            style={[styles.text, {color: color, fontSize: fontSize} ]}
        >{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
    fontFamily: Fonts.metropolisBlack,
    },
  });

export default CustomText