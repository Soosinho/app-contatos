import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Cartao from './Cartao';
import Cores from '../cores/cores';

const ContatoItem = (props) => {
    const { contato } = props;

    return (
        <TouchableOpacity onLongPress={() => props.onDelete(contato.item.key)} onPress={props.onAbrirAtualizar}>
            <Cartao style={styles.contatoInfo}>
                <Text>{"Nome: " + contato.nome}</Text>
                <Text>{"Telefone: " + contato.telefone}</Text>
            </Cartao>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contatoInfo: {
        flexDirection: 'row',
        backgroundColor: Cores.yellow,
        width: 250,
        maxWidth: '100%',
    }
});

export default ContatoItem