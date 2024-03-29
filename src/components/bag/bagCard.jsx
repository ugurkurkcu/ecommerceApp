//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import Counter from '../ui/counter';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

// create a component
const BagCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PRODUCTDETAIL, {
          item: item,
          category: item.category,
        })
      }
      style={styles.container}>
      <View style={{flex: 1}}>
        <Image style={styles.image} source={{uri: item?.image}} />
      </View>
      <View style={{flex: 4, gap: 4, marginLeft: 10}}>
        <Text numberOfLines={3} style={styles.title}>
          {item?.title}
        </Text>
        <Text style={styles.category}>{item?.category}</Text>
        <Text style={styles.price}>${item?.price}</Text>
      </View>
      <View style={{flex: 2}}>
        <Counter onChange={value => console.log(value)} />
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height * 0.11,
    backgroundColor: AppColors.WHITE,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: 1,
    shadowRadius: 4,
    shadowOpacity: 6,
    shadowColor: 'gray',
    borderRadius: 20,
  },
  image: {
    height: width * 0.15,
    width: width * 0.15,
    marginTop: 5,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
  },
  category: {
    fontSize: 10,
    fontWeight: '600',
    color: AppColors.GRAY,
  },
  price: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.BLACK,
  },
});

//make this component available to the app
export default BagCard;
