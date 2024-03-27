import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CATEGORIES, FAVOURITES, HOME, PROFILE} from '../utils/routes';
import Home from '../screen/home';
import Categories from '../screen/categories';
import Profile from '../screen/profile';
import Favourites from '../screen/favourites';
import {AppColors} from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import HeaderTabRight from '../components/router/headerTabRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            name={route?.name}
            focused={focused}
            color={color}
            size={size}
            route={route}
          />
        ),
        headerRight: ({focused, color, size}) => <HeaderTabRight search />,
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.SECONDARY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={FAVOURITES} component={Favourites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
