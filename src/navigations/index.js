import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackHome from './StackHome';
import StackBlog from './StackBlog';

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={StackHome} />
            <Drawer.Screen name="Blog" component={StackBlog} />
        </Drawer.Navigator>
        {props.children}
    </NavigationContainer>
  );
}
