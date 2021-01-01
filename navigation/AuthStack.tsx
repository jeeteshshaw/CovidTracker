import React from 'react';
import {View} from 'react-native';
import {
  AuthSigninScreen, 
  AuthSignupScreen, 
  AuthVerifyEmailScreen
} from '../screen/Auth';
import Homepage from '../screen/Homepage';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screen/Profile';
import ForgetPassword from '../screen/auth/ForgetPassword';



const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login'
            component={AuthSigninScreen}
            // initialParams={{ title: 'email' }}
            options={{title: 'Email Check', headerShown: false,}}
          />
          <Stack.Screen name='Signup'
            component={AuthSignupScreen}
            // initialParams={{ title: 'login' }}
            options={{title: 'Signup', headerShown: false,}}
            
          />
          <Stack.Screen name='Verify'
            component={AuthVerifyEmailScreen}
            // initialParams={{ title: 'Verify' }}
            options={{title: 'Verify', headerShown: false}}
            
          />
          <Stack.Screen name='Home'
            component={Homepage}
            options={{title: 'Home', headerShown: false,}}
          />
          <Stack.Screen name='Profile'
            component={Profile}
            options={{title: 'Profile', headerShown: true,}}
          />
          <Stack.Screen name='Forget'
            component={ForgetPassword}
            options={{title: 'Profile', headerShown: false,}}
          />
        </Stack.Navigator>
    )
}

export default AuthStack
