import { StyleSheet } from "react-native";
import { height, width } from "../../Utils/dimensions";
import Colors from "../../Utils/color";

const styles = StyleSheet.create({
    container: {
      width: width * 0.9,
      height: height * 0.14,
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: Colors.primary200,
    },
  });

  export default styles