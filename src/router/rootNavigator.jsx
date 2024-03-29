// In StackNavigator.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screen/cart';
import {
  CART,
  CHECKOUT,
  LOGIN,
  PRODUCTDETAIL,
  PRODUCTLIST,
  TABNAVIGATOR,
} from '../utils/routes';
import TabNavigator from './tabNavigator';
import {AppColors} from '../theme/colors';
import ProductList from '../screen/product/productList';
import ProductDetail from '../screen/product/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';
import Login from '../screen/login';
import CheckOut from '../screen/checkOut';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.PRIMARY,
        contentStyle: {
          textTransform: 'capitalize',
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight search />,
          title: route?.params?.title,
          tabBarActiveTintColor: AppColors.PRIMARY,
          tabBarInactiveTintColor: AppColors.SECONDARY,
        })}
        name={PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
          tabBarActiveTintColor: AppColors.PRIMARY,
          tabBarInactiveTintColor: AppColors.SECONDARY,
        })}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          tabBarActiveTintColor: AppColors.PRIMARY,
          tabBarInactiveTintColor: AppColors.SECONDARY,
        })}
        name={LOGIN}
        component={Login}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          tabBarActiveTintColor: AppColors.PRIMARY,
          tabBarInactiveTintColor: AppColors.SECONDARY,
        })}
        name={CHECKOUT}
        component={CheckOut}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
