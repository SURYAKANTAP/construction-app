import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';


import SolutionsScreen from './SolutionsScreen';
import OrderScreen from './OrderScreen';
import MenuScreen from './MenuScreen';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();



const AllScreen = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, focused }) => {
            let iconName;
            let iconSize = 24;

            if (route.name === 'Home') {
              iconName = 'home';
              return (
                <Fontisto name={iconName} size={iconSize} color={focused ? '#0085ff' : color} />
              );
            } else if (route.name === 'Solutions') {
              iconName = 'solution1'; // Update icon name for AntDesign
              return (
                <AntDesign name={iconName} size={iconSize} color={focused ? '#0085ff' : color} />
              );
            } else if (route.name === 'Orders') {
              iconName = 'list-ordered'; // Update icon name for Octicons
              return (
                <Octicons name={iconName} size={iconSize} color={focused ? '#0085ff' : color} />
              );
            } else if (route.name === 'Menu') {
              iconName = 'menu';
              iconSize = 22; // Adjusting size for SimpleLineIcons
              return (
                <SimpleLineIcons name={iconName} size={iconSize} color={focused ? '#0085ff' : color} />
              );
            }

            // Use the active color if the tab is focused, otherwise use the provided color
            
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Solutions" component={SolutionsScreen} />
        <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    
  );
};

export default AllScreen;
