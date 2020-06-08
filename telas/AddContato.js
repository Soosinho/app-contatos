import React from 'react';
import { View, StyleSheet } from 'react-native';

import Cores from '../cores/cores'
import Cartao from '../components/Cartao'
import ContatoInput from '../components/ContatoInput'

export default function AddContato({ route }) {
    return (
        <View style={styles.telaCadastroView}>
            <Cartao style={styles.contatoInput}>
                <ContatoInput onAdicionarContato={route.params.adicionarContato} />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    telaCadastroView: {
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    contatoInput: {
        backgroundColor: Cores.yellow
    }
});