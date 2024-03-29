import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

const CategoryCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PRODUCTLIST, {category: item, title: item})
      }
      style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: AppColors.PRIMARY,
    margin: 5,
    height: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowRadius: 4,
    shadowOpacity: 5,
    shadowOffset: 2,
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: AppColors.WHITE,
  },
});

export default CategoryCard;
