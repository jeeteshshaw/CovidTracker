import React from 'react'
import {View} from 'react-native'
import {AuthSigninScreen, AuthSignupScreen, AuthVerifyEmailScreen} from '../screen/Auth'
import Homepage from '../screen/Homepage'
import {createStackNavigator} from '@react-navigation/stack'



const Stack = createStackNavigator();

const index = () => {
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
            options={{title: 'Verify', headerShown: false,}}
            
          />
          <Stack.Screen name='Home'
            component={Homepage}
            options={{title: 'Home', headerShown: false,}}
          />
        </Stack.Navigator>
    )
}

export default index
