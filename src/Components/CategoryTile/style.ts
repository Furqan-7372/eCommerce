import { StyleSheet } from "react-native";
import { height, width } from "../../Utils/dimensions";
import Colors from "../../Utils/color";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: width * 0.9,
      height: height * 0.14,
      marginVertical: 8,
      borderRadius: 10,
      overflow: 'hidden',
    },
    textContainer: {
      flex: 1,
      
      justifyContent: 'center',
      backgroundColor: Colors.primary0,
    },
    innerTextContainer: {
      flex: 1,
      justifyContent: 'center',
      margin: '15%',
    },
    imageContainer: {
      flex: 1,
      overflow: 'hidden',
    },
    categoryImage: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

  export default styles