//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../theme/colors';

// create a component
const Categories = () => {
    return (
        <View style={styles.container}>
            <Text>Categories</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  AppColors.WHITE,
    },
});

//make this component available to the app
export default Categories;
