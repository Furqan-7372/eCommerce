import { StyleSheet } from "react-native";
import { height, width } from "../../Utils/dimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 10,
      overflow: 'hidden',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 5,
    },
    image: {
      width: width * 0.38,
      height: height * 0.25, // Adjust the height as needed
      borderRadius: 5,
    },
    textContainer: {
      flex: 1,
      margin: 5,
      paddingHorizontal: 5,
    },
  });

  export default styles