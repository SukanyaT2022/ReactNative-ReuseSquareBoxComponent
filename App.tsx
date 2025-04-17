/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//we need this two import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/allScreensFolder/HomeScreen';
import DetailScreen from './src/allScreensFolder/DetailScreen';

const Stack = createNativeStackNavigator();

export const screen = {
home: 'Home',
details: 'Details'
}
function App(): React.JSX.Element {


  return (

    <NavigationContainer>

        <Stack.Navigator initialRouteName={screen.home}>
      {/* //options={{headerShown:false}} if donot want header on the screen */}
        <Stack.Screen name={screen.home} component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name={screen.details} component={DetailScreen} />
      </Stack.Navigator>

      </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  main: {
marginTop:50
  },
  
});

export default App;

{/* <Text>Hello</Text>
<Icon name="rocket" size={30} color="#900" />
<Text style={{fontFamily:'Roboto',marginTop:100, fontSize:50}}>Test google font</Text> */}