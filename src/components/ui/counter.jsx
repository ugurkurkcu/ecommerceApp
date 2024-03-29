//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';

// create a component
const Counter = ({onChange}) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.countArea}>
        <TouchableOpacity
          disabled={count == 0}
          onPress={() => {
            setCount(count - 1);
            onChange(count - 1);
          }}
          style={styles.countButtonDec}>
          <MinusCirlce size="32" color={AppColors.PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity
          disabled={count == 5}
          onPress={() => {
            setCount(count + 1);
            onChange(count + 1);
          }}
          style={styles.countButtonAsc}>
          <AddCircle size="32" color={AppColors.PRIMARY} variant="Bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countArea: {
    flexDirection: 'row',
    width: width * 0.25,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
});

//make this component available to the app
export default Counter;
