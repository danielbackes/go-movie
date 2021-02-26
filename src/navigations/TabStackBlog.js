import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BlogPostsScreen from '../screens/BlogPosts';
import BlogAlbumsScreen from '../screens/BlogAlbums';
import BlogCommentsScreen from '../screens/BlogComments';
import BlogPhotosScreen from '../screens/BlogPhotos';

const Tab = createBottomTabNavigator();

export default function TabStackBlog() {
  return (    
      <Tab.Navigator
        initialRouteName="BlogPosts"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            const routes = {
              Posts: {
                icon: 'apps-outline',
              }
            }

            if (route.name === 'Posts') {
              iconName = 'apps-outline';
            } else if (route.name === 'Albums') {
              iconName = 'albums-outline';
            } else if (route.name === 'Comments') {
              iconName = 'chatbox-ellipses-outline';
            } else if (route.name === 'Photos') {
              iconName = 'image-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Posts" component={BlogPostsScreen} />
        <Tab.Screen name="Albums" component={BlogAlbumsScreen} />
        <Tab.Screen name="Comments" component={BlogCommentsScreen} />
        <Tab.Screen name="Photos" component={BlogPhotosScreen} />
      </Tab.Navigator>    
  );
}