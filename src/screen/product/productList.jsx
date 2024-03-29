//import liraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/product/productCard';
import Spinner from '../../components/ui/spinner';
import CategorySelect from '../../components/widgets/categorySelect';

// create a component
const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const selectedCategory = route?.params?.category

  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    setIsPending(true);
    getRequest(url)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err))
      .finally(() => setIsPending(false));
  };

  useEffect(() => {
    getAllProducts(selectedCategory);
  }, []);

  return (
    <View style={styles.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />
      {isPending ? (
        <Spinner />
      ) : (
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

//make this component available to the app
export default ProductList;
