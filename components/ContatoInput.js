import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const ContatoInput = (props) => {
    const contatoKey = props.contatoAtual ? props.contatoAtual.item.key : '';
    const [contatoNome, setContatoNome] = useState(props.contatoAtual ? props.contatoAtual.item.value.contatoNome : '');
    const [contatoTelefone, setContatoTelefone] = useState(props.contatoAtual ? props.contatoAtual.item.value.contatoTelefone : '');

    const capturarContatoNome = (nome) => {
        setContatoNome(nome)
    };

    const capturarContatoTelefone = (telefone) => {
        setContatoTelefone(telefone)
    };

    let botaoAcao;
    if (props.onAdicionarContato)
        botaoAcao = <Button
            title="Adicionar"
            onPress={() => props.onAdicionarContato(contatoNome, contatoTelefone)}
        />
    else if (props.onAtualizarContato)
        botaoAcao = <Button
            title="Atualizar"
            onPress={() => props.onAtualizarContato({ value: { contatoNome, contatoTelefone }, key: contatoKey })}
        />

    return (
        <View style={styles.contatoView}>
            <View style={styles.contatoInput}>
                <TextInput
                    placeholder="Nome"
                    style={styles.contatoInputText}
                    onChangeText={capturarContatoNome}
                    value={contatoNome}
                />

                <TextInput
                    placeholder="Telefone"
                    style={styles.contatoInputText}
                    onChangeText={capturarContatoTelefone}
                    value={contatoTelefone}
                    keyboardType={"phone-pad"}
                />
            </View>
            {botaoAcao}
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    contatoInput: {
    },
    contatoInputText: {
        alignSelf: 'center',
        width: 100,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 8,
        marginRight: 30,
    }
});

export default ContatoInput