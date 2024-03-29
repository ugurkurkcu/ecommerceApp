//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AppColors } from '../../theme/colors';

// create a component
const Badge = ({count}) => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: AppColors.PRIMARY,
        opacity: 50,
        borderRadius: 10,
        width: 18,
        height: 18,
        right: 10,
        top: -5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: AppColors.WHITE}}>{count}</Text>
    </View>
  );
};

export default Badge;
