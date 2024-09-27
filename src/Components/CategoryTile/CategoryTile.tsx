import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../Text';

type CategoryTileProps = {
  categoryName: string;
  imageSource: string; // You can use ImageSourcePropType if importing static images
  onPress?: () => void;
};

const CategoryTile: React.FC<CategoryTileProps> = ({ categoryName, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <CustomText style={styles.categoryText} >{categoryName}</CustomText>
      </View>
      <Image source={{ uri: imageSource }} style={styles.categoryImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff', // You can adjust this as per your theme
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust to your theme
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Makes the image circular if it's a square
    marginLeft: 16,
  },
});

export default CategoryTile;
