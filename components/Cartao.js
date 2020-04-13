import React from 'react'
import { View, StyleSheet } from 'react-native'
import Cores from '../cores/cores'

const Cartao = (props) => {
    return (
        <View style = {{...styles.cartao, ...props.styles}}>
            {props.children} 
        </View>
    )
}

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: Cores.yellow,
        borderColor: Cores.border,
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 20,
        elevation: 3,
        padding: 12,
    }
})

export default Cartao