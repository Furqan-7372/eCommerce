import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import images from '../../Assets/Images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackScreenProps } from '@react-navigation/stack';

let { width, height } = Dimensions.get('window');

// Define the navigation params for the screen
interface ProductDetailProps extends StackScreenProps<any> {
  route: {
    params: {
      productName: string; // Expecting product name from the route params
    };
  };
}

const ProductDetailScreen: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const { productName } = route.params; // Get product name from route params
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');

  const handleShare = () => {
    // Share functionality will go here
    console.log('Share icon pressed!');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: productName, // Set the header title to the product name
      headerTitleAlign: 'center', 
      headerRight: () => (
        <TouchableOpacity onPress={handleShare} style={styles.headerIconContainer}>
          <MaterialIcons name="share" size={25} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, productName]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.imageScrollContainer}>
        <Image source={images.cloth1} style={styles.image} />
        <Image source={images.cloth2} style={styles.image} />
        <Image source={images.cloth3} style={styles.image} />
      </ScrollView>

      <View style={styles.dropdownContainer}>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedSize}
            onValueChange={itemValue => setSelectedSize(itemValue)}>
            <Picker.Item label="Size" value="" />
            <Picker.Item label="S" value="S" />
            <Picker.Item label="M" value="M" />
            <Picker.Item label="L" value="L" />
          </Picker>
        </View>

        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedColor}
            onValueChange={itemValue => setSelectedColor(itemValue)}>
            <Picker.Item label="Color" value="" />
            <Picker.Item label="Black" value="black" />
            <Picker.Item label="White" value="white" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
        <View style={styles.favouriteIconContainer}>
          <MaterialIcons name="favorite-border" size={25} color={'grey'} />
        </View>
      </View>

      <View style={styles.productInfo}>
        <View style={styles.productNamePriceContainer}>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.price}>$ 99.99</Text>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageScrollContainer: {
    marginVertical: 10,
  },
  image: {
    width: width * 0.7,
    height: height * 0.5, // Adjust height as necessary
    margin: 2,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    width: '40%',
  },
  favouriteIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  productInfo: {
    marginVertical: 20,
  },
  productNamePriceContainer: {
    width: '97%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 26,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  headerIconContainer: {
    marginRight: 15,
  },
});

export default ProductDetailScreen;
