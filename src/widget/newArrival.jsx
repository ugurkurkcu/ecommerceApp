import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/widgetProductCard';

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    getRequest(CATEGORY_URL+"women's clothing",{limit:3})
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
      <WidgetTitle title={'New Arrival'} category={"women's clothing"} />
      <FlatList
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

export default NewArrival;
