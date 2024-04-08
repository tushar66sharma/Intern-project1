import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MainScreen } from './components/mainscreen/mainscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {enableScreens} from 'react-native-screens';
import {RestaurantsViewAll} from './components/view all pages/restaurants_viewall';
import { FilterPage } from './components/filter_page/filterpage';
enableScreens();
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 25,
              fontFamily: 'Urbanist-Bold', 
            },
            headerTitleAlign: 'left', 
          }}>
          
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              headerShown: false,
              
              
              
            }}
          />
          <Stack.Screen
            name="Filters"
            component={FilterPage}
            options={{
              headerBackVisible:false,
              headerTransparent: true,
              headerLeft:()=>(null),
              headerTitle: () => (
                <View style={{ paddingLeft: 20 }}>
                  <Text style={{ color: 'black', fontSize: 25, fontFamily: 'Urbanist-Bold' }}>Filters</Text>
                </View>
              ),
              contentStyle:{paddingTop:50},
            }}
          />
          <Stack.Screen
            name="RestaurantsViewAll"
            component={RestaurantsViewAll}
            options={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTitleStyle: {
                color: 'black',
                 
              },
              headerTitle:'Satisfy your Cravings',
              headerTransparent:true,
              contentStyle:{paddingTop:50},
              headerTitleAlign:'left',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

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

export default App;
