import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/CategoryCard';
import {screenStyle} from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';

const Categories = ({onSelect}) => {
  const [categories, setCategories] = useState([]);
  const [isPanding, setIsPanding] = useState(false);

  const getCategories = () => {
    setIsPanding(true);
    getRequest(CATEGORIES_URL)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsPanding(false));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyle.container}>
      {isPanding ? (
        <Spinner />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    backgroundColor: AppColors.SOFT_GRAY,
    borderRadius: 20,
    padding: 10,
    marginRight: 8,
  },
  activeSlider: {
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 20,
    padding: 10,
    marginRight: 8,
  },
});

export default Categories;
