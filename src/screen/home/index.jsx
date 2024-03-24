//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/colors';
import widget from '../../widget';
import {screenStyle} from '../../styles/screenStyle';

// create a component
const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShown && item.component}</View>;
  };
  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={widget}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
