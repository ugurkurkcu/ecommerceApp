import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL, PRODUCTS_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/widgetProductCard';
import CategorySelect from '../components/widgets/categorySelect';

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  const getBestSellerProducts = (category = 'electronics') => {
    getRequest(CATEGORY_URL + category, {limit: 4, sort: 'asc'})
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} />
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BestSeller;
