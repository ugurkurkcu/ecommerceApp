//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constants';
import {AppColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';

// create a component
const Introduction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/jordan.png')} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.button}>
        <Text style={{color: AppColors.WHITE, fontWeight: 700}}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: height * 0.27,
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    width: width * 0.4,
    bottom: 5,
    right: 10,
    padding: 7,
    marginVertical: 3,
    backgroundColor: AppColors.PRIMARY,
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 10,
    shadowOffset: 20,
  },
});

//make this component available to the app
export default Introduction;
