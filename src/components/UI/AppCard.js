import React from 'react'
import { View, StyleSheet } from 'react-native'

export const AppCard = props => {
    return(
        <View style={ { ...styles.default, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        margin: 10,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 2,
            height: 2
        },
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 8
    }
})