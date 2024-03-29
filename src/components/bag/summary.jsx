import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Button from '../ui/button';
import {AppColors} from '../../theme/colors';
import {height} from '../../utils/constants';
import StoreContext from '../../context';
import {useNavigation} from '@react-navigation/native';
import {CHECKOUT, LOGIN} from '../../utils/routes';

const Summary = () => {
  const {isLogin} = useContext(StoreContext);
  const navigation = useNavigation();

  const checkOut = () => {
    isLogin
      ? navigation.navigate(CHECKOUT)
      : Alert.alert('Please Login', 'Login first to checkout!', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Login', onPress: () => navigation.navigate(LOGIN)},
        ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textLine}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.price}>$100</Text>
      </View>
      <View style={styles.textLine}>
        <Text style={styles.text}>Delevery Fee</Text>
        <Text style={styles.price}>$100</Text>
      </View>
      <View style={styles.textLine}>
        <Text style={styles.text}>Discount</Text>
        <Text style={styles.price}>$100</Text>
      </View>
      <View style={styles.textLineBottom}>
        <Text style={styles.textTotal}>TOTAL</Text>
        <Text style={styles.priceTotal}>$100</Text>
      </View>

      <Button onPress={() => checkOut()} title="Check Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    marginBottom: 20,
    borderRadius: 20,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  textLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 13,
  },
  textLineBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 50,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: AppColors.SECONDARY,
  },
  textTotal: {
    fontWeight: '800',
    fontSize: 16,
    color: AppColors.SECONDARY,
  },
  price: {
    fontWeight: '700',
    fontSize: 14,
  },
  priceTotal: {
    fontWeight: '800',
    fontSize: 16,
  },
});

export default Summary;
