//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Heart} from 'iconsax-react-native';

// create a component
const ProductCard = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity>
          <Heart variant="Bold" color={AppColors.PRIMARY} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
    backgroundColor: AppColors.WHITE,
    margin: 5,
    padding: 5,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    width: width * 0.44,
    height: width * 0.55,
    gap: 5,
    backgroundColor: 'white',
  },
  image: {
    width: width * 0.4,
    height: width * 0.33,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  category: {
    fontSize: 14,
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
export default ProductCard;
