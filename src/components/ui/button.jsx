//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';

// create a component
const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 2,
    shadowOffset: 0,
    shadowRadius: 3,
  },
  text: {
    color: AppColors.WHITE,
    fontSize: 16,
    fontWeight: '600',
    padding: 5,
  },
});

export default Button;
