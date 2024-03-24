//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Heart} from 'iconsax-react-native';

// create a component
const WidgetProductCard = ({item}) => {
  return (
    <View style={{gap: 10}}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 20, paddingHorizontal: 10}}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity>
          <Heart variant='Bold' color={AppColors.PRIMARY} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.38,
    height: width * 0.55,
    marginHorizontal: 5,
    gap: 5,
  },
  image: {
    width: width * 0.38,
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
export default WidgetProductCard;
