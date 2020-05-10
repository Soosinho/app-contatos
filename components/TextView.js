import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TextView = (props) => {
    return (
        <View style={styles.tela}>
            <View style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
                <Text style={styles.contatoText}>{props.nome}</Text>
            </View>
            <View style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
                <Text style={styles.contatoText}>{props.telefone}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1
    },
    text: {
        flexDirection: 'column',

        paddingVertical: 8
    },
    contatoText: {
        marginTop: 6
    }
})

export default TextView