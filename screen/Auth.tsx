import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GText } from '../component/Global/GText'
import SigninScreen from './auth/SigninScreen'
import SignupScreen from './auth/SignupScreen'
import VerifyEmailScreen from './auth/VerifyEmailScreen'

const Auth = (screen) => (
    <View style={styles.container}>
        <View style={{width:'80%'}}>
        <View>
            <GText 
            style={{color: '#0faddd', fontWeight: 'bold', textAlign:'center',fontSize:28, marginVertical: 20,}}
            >Covid-19 Tracker</GText>
        </View>
            {screen}
        </View>
    </View>
)


function AuthSigninScreen({ navigation, route }) {
        const screen = (<SigninScreen navigation={navigation} route={route}/>) 
        return Auth(screen)
    }

function AuthSignupScreen({ navigation, route }) {
    
            const screen = (<SignupScreen navigation={navigation} route={route} />) 
            return Auth(screen)
        
    }
function AuthVerifyEmailScreen({ navigation, route }) {
    
            const screen = (<VerifyEmailScreen navigation={navigation} route={route} />) 
            return Auth(screen)
    }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });

export {AuthSigninScreen, AuthSignupScreen, AuthVerifyEmailScreen}