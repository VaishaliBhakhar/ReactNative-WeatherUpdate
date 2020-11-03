import 'react-native-gesture-handler';
import React, {} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Weather from './src/components/weather';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MultiCityWeather from './src/components/multiCityWeather';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Weather navigation={navigation} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Welcome"
          component={Weather}
          options={{title: ''}}
        />
        <Stack.Screen name="MultiCityWeather" component={MultiCityWeather} 
        options={{
          headerShown: true,
          headerTitle: ''
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
