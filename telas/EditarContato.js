import React from 'react';
import { StyleSheet, View } from 'react-native';

import ContatoInput from '../components/ContatoInput';
import Cartao from '../components/Cartao';
import Cores from '../cores/cores';

export default function EditarContato({ route }) {
    return (
        <View style={styles.telaUpdateView}>
            <Cartao style={styles.contatoInput}>
                <ContatoInput contatoAtual={route.params.contato} onAtualizarContato={route.params.atualizarContato} />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    telaUpdateView: {
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'center'
    },
    contatoInput: {
        backgroundColor: Cores.yellow
    }
});