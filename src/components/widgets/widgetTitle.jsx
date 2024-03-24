import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';

const WidgetTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 700, color: AppColors.BLACK}}>
        {title}
      </Text>
      <TouchableOpacity>
        <Text style={{fontSize: 14, fontWeight: 400, color: AppColors.GRAY}}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default WidgetTitle;
