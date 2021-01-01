import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { GText } from './Global/GText'


export default function MenuComponent({onPress=()=>{}}) {
    return (
        <View style={style.container}>
           <Icon
            raised
            name='user-cog'
            type='font-awesome-5'
            color='#f50'
            onPress={onPress} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#FFE042',
        padding: 10,
        borderWidth: 5,
        borderColor: "#FFE042",
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 15,
    }
})