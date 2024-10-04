import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {IChildrenScreen} from '../../Interfaces/index';
import CategoryTile from '../../Components/CategoryTile';
import SummerSaleBanner from '../../Components/SummerSaleBanner';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {getStore} from '../../Services/index';

const Children: React.FC<IChildrenScreen> = () => {
  const navigation = useNavigation();
  const [storeData, setStoreData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStoreData = async () => {
    const data: any[] = [];

    for (let shopNumber = 1; shopNumber <= 4; shopNumber++) {
      try {
        const result = await getStore(shopNumber);
        data.push(result.data);
      } catch (err) {
        const typedError = err as Error;
        console.error(`Error fetching store ${shopNumber}:`, typedError);
        setError(typedError.message);
      }
    }

    setStoreData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStoreData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) return <Text>Error: {error}</Text>;

  const handleCategoryClick = (products: any) => {
    console.log('dsadasdadadad', products);
    navigation.navigate('ProductsStack', {
      screen: 'Products',
      params: {
        products: products.products,
        name: products.name,
        image: products.image.path,
      },
    });
  };

  const renderItem = ({
    item,
  }: {
    item: {name: string; image: any; products: any};
  }) => (
    <CategoryTile
      onPress={() => handleCategoryClick(item)}
      categoryName={item.name}
      image={item.image.path}
    />
  );

  return (
    <View style={styles.container}>
      <SummerSaleBanner />
      <FlatList
        data={storeData}
        renderItem={renderItem}
        keyExtractor={(index) => index.toString()}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default Children;
