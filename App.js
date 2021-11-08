import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import postImage from './assets/stock.png';

import Post from './components/Post';
import Welcome from './components/Welcome';

const image = { uri: "https://reactjs.org/logo-og.png"};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Welcome'
          component={Welcome} />

        <Stack.Screen
          name='Post'
          component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}