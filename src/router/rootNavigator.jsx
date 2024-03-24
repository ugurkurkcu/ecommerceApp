// In StackNavigator.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screen/cart';
import {CART, PRODUCTDETAIL, PRODUCTLIST, TABNAVIGATOR} from '../utils/routes';
import TabNavigator from './tabNavigator';
import {AppColors} from '../theme/colors';
import ProductList from '../screen/product/productList';
import ProductDetail from '../screen/product/productDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.PRIMARY,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
      <Stack.Screen name={PRODUCTDETAIL} component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
