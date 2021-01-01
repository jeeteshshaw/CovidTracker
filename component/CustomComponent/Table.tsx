import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Table({style={}, children}) {
    return (
        <View style={[styles.table, style]} >
           {children}
        </View>
    )
}
function Tr({style={}, children}) {
    return (
        <View style={[styles.tr, style]} >
           {children}
        </View>
    )
}

function Td({style={}, children}) {
    return (
        <View style={[styles.td, style]} >
           {children}
        </View>
    )
}

function Th({style={}, children}) {
    return (
        <View style={[styles.th, style]} >
           {children}
        </View>
    )
}





export {Table, Tr, Th, Td}


const styles = StyleSheet.create({
    table:{
        width: "100%",
    },
    tr:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 30
    },
    th:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: 'grey',
        width: "100%",
        paddingRight: 3,
        borderRightWidth:2,
        color: '#000'
    },
    td:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: 'grey',
        width: "100%",
        paddingRight: 3,
        borderRightWidth:2,
        color: '#000'
    }
})
