import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';

const CategorySelect = ({onSelect}) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  };

  const selectCategory = category => {
    setCategory(category);
    onSelect(category);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={category == item ? styles.activeSlider : styles.slider}>
        <Text
          style={{color: item == category ? AppColors.WHITE : AppColors.BLACK}}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
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

export default CategorySelect;
