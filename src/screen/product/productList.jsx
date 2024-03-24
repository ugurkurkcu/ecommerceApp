//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/product/productCard';

// create a component
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    getRequest(PRODUCTS_URL)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <ProductCard item={item} />}
      />
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
