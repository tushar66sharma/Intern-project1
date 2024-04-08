import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
  Image,
} from 'react-native';

import {Search} from '../../components/search bar/search_bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {enableScreens} from 'react-native-screens';
import {Restaurants} from '../../components/tab pages/restaurants';
import {Cooking} from '../../components/tab pages/cooking';


enableScreens();
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontSize: 20,
          textTransform: 'none',
          fontFamily: 'Urbanist-Bold',
        },
        tabBarItemStyle: {
          width: 180,
          height: 60,
          backgroundColor: 'transparent',
         
          
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 3,
          borderRadius: 15,
          width: 180,
          marginRight: 10,
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          marginLeft: 20,
          marginRight: 10,
          elevation:0,
          borderTopWidth:0,
          
        },
      }}>
      <Tab.Screen name="Restaurants" component={Restaurants} />
      <Tab.Screen name="Cooking" component={Cooking} />
    </Tab.Navigator>
  );
}

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Good Morning{'\n'}Mr.Joe!</Text>
      <Search />
      <Root/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    heading: {
      color: '#000000',
      fontFamily: 'Urbanist-Bold',
      fontSize: 25,
      marginLeft: 20,
      marginTop: 35,
    },
  });
