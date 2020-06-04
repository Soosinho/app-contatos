import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const TextInputView = (props) => {
    const [novoContato, setNovoContato] = useState(props.contato)

    const capturarNome = (nome) => {
        let key = novoContato.key
        let nomeContato = nome
        let telefoneContato = novoContato.telefone
        setNovoContato({
            key: key,
            nome: nomeContato,
            telefone: telefoneContato,
        })
    }

    const capturarTelefone = (telefone) => {
        let key = novoContato.key
        let nomeContato = novoContato.nome
        let telefoneContato = telefone
        setNovoContato({
            key: key,
            nome: nomeContato,
            telefone: telefoneContato,
        })
    }

    const aplicar = (key) => {
        return console.log(novoContato.item)
    }

    return (
        <View style={styles.tela}>
            <View style = {styles.input}>
                <View style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
                    <TextInput
                        style={styles.contatoText}
                        defaultValue={props.contato.item.nome}
                        value={novoContato.nome}
                        onChange={capturarNome}
                    />
                </View>
                <View style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
                    <TextInput
                        style={styles.contatoText}
                        defaultValue={props.contato.item.telefone}
                        value={novoContato.telefone}
                        onChange={capturarTelefone}
                    />
                </View>
            </View>
            <View style={{ width: '32%', justifyContent: 'center' }}>
                <Button
                    title="Aplicar"
                    onPress={aplicar}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'column',
        paddingVertical: 8
    },
    contatoText: {
        borderBottomWidth: 1,
        width: '70%'
    },
    input: {
        flex: 1
    }
})

export default TextInputView