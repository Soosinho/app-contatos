import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Cartao from './Cartao'

const ContatoItem = (props) => {
    return (
        <TouchableOpacity 
            onPress={props.onContato}
            onLongPress={props.onDelete.bind(this, props.chave)}
        >
            <Cartao>
                <View style={styles.itemNaLista}>
                    <View style={styles.nome}>
                        <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
                        <Text> {props.nome} </Text>
                    </View>
                    <View style={styles.telefone}>
                        <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
                        <Text> {props.telefone} </Text>
                    </View>
                </View>
            </Cartao>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    nome: {
        flexDirection: 'row',
    },
    telefone: {
        flexDirection: 'row',
    },
    itemNaLista: {
        width: 300,
        maxWidth: '80%',
    },
});

export default ContatoItem