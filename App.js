import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookBuyScreen from './screens/BookBuyScreen';
import SearchScreen from './screens/SearchScreen';
export default class App extends React.Component {
  render(){
  return <AppContainer/>; 
}
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:BookBuyScreen},
  search:{screen:SearchScreen}
});
const AppContainer=createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
