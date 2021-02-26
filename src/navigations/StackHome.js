import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';

import HomeScreen from '../screens/Home';
import GeolocationsScreen from '../screens/Geolocations';
import NotificationsScreen from '../screens/Notifications';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

export default function StackHome({ navigation }) {
  return (    
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#2a9d8f',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <IconButton
                        icon="menu"
                        color='#000'
                        size={20}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }}
        />
        <Stack.Screen
            name="Geolocations" 
            component={GeolocationsScreen} 
            options={{
                title: 'Geolocations',
            }}
        />
        <Stack.Screen
            name="Notifications" 
            component={NotificationsScreen} 
            options={{
                title: 'Notifications',
            }}
        />
        <Stack.Screen
            name="Details" 
            component={DetailsScreen} 
            options={{
                title: 'Details',
                headerRight: () => (
                    <IconButton
                        icon="airplane-landing"
                        color="#000"
                        size={20}
                        onPress={() => alert('This is a airplane!')}
                    />
                ),
            }}
        />        
    </Stack.Navigator>
  );
}