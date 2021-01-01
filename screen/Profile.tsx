import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import { GButton } from '../component/Global/GButton'
import { GInput } from '../component/Global/GInput'
import { GText } from '../component/Global/GText'
import { AuthContext, FirebaseUserUpdateName } from '../Service'
import { config } from '../Service/Firebase/Config'

const Profile = ({navigation, route}) => {
    const {UserContext, setUserContext} = useContext(AuthContext);
    console.log(UserContext)
    const [User, setUser] = useState({
        name: UserContext.providerData.displayName,
        // phone: UserContext.providerData.phoneNumber,
    })

    const UpdateHandler = async()=>{
        if(UserContext.providerData.displayName == User.name)
        return console.log("no update");
        
        FirebaseUserUpdateName(User.name)
    }

    return (
        <View style={styles.profile}>

            <View style={styles.header}>
                <View style={{padding: 3 ,borderWidth: 2, borderRadius: 50, marginVertical: 10}}>
                    <Icon
                    raised
                    name='user-cog'
                    type='font-awesome-5'
                    color='#f50'
                    style={{width: 40, height: 40}}
                    />
                </View>
                <GText style={{fontSize: 18, color: 'grey'}}> Mr/Mrs {UserContext.providerData.email}</GText>
            </View>

            <View style={{marginVertical: 20}}> 

                <View style={styles.info} >
                    <GText 
                    style={{width:"75%", marginVertical: 5, fontSize: 18, color: 'grey', fontStyle: 'italic'}}
                    >Name</GText>

                    <View style={{width: "75%"}}>
                    <GInput 
                    value={User.name}
                    style={{backgroundColor: "#fff", color: '#333', borderRadius: 0}}
                    onChangeText={(text="")=> setUser({...User, name: text})}
                    />
                    </View>
                </View>
                
                <View style={{width: '100%', position:'relative'}}>
                    <GButton 
                    style={styles.BtnUpdate}
                    onPress={UpdateHandler}
                    >Update</GButton>
                </View>
            </View>
            <View style={{width: '100%', position: 'absolute', bottom: 0, padding: 10}}>
            <GButton onPress={async()=> {
                await config.auth().signOut()
                navigation.navigate("Login")
                }}>Sign out</GButton>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    profile:{
        width: "100%",
        height: "100%"
    },
    header:{
        marginVertical: 20, 
        width: "100%", 
        display: 'flex', 
        justifyContent:'space-between',
        alignItems: 'center'
    },
    info:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    BtnUpdate:{
        position: 'absolute',
        top: 20, 
        right: 20, 
        width: "auto", 
        height: 20, 
        fontSize:20
    }
})