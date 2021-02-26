import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';

import BlogScreen from '../screens/Blog';
import TabStackBlogScreen from './TabStackBlog';

const Stack = createStackNavigator();

export default function StackBlog({ navigation }) {
  return (    
    <Stack.Navigator>
        <Stack.Screen 
            name="Blog" 
            component={BlogScreen}
            options={{
                title: 'Lista de blogs',
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
            name="TabBlog" 
            component={TabStackBlogScreen}
            options={{
                title: 'Blog',
            }}
        />
    </Stack.Navigator>
  );
}