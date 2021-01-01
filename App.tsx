import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Auth from './screen/Auth'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
// import Homepage from './screen/Homepage';
import AuthStack from './navigation/AuthStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContext } from './Service';
import * as Linking from 'expo-linking';

const Stack = createStackNavigator();




export default function App() {
  const [UserContext, setUserContext] = useState();

  return (
      <SafeAreaProvider>
        <AuthContext.Provider value={{UserContext, setUserContext}} >
         <NavigationContainer> 
          <AuthStack />
        </NavigationContainer>  
        {/* <View><Text>Hello</Text></View> */}
        </AuthContext.Provider>
      </SafeAreaProvider>
    
  );
}



