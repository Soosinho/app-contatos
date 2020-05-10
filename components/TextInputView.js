import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

const TextInputView = (props) => {
    return (
        <View style={styles.tela}>
            <View style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
                <TextInput 
                    style={styles.contatoText}
                    defaultValue={props.nome}
                />
            </View>
            <View style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
                <TextInput 
                    style={styles.contatoText}
                    defaultValue={props.telefone}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
    },
    text: {
        flexDirection: 'column',
        paddingVertical: 8
    },
    contatoText: {
        borderBottomWidth: 1,
        width: '70%'
    }
})

export default TextInputView