import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import Cartao from '../components/Cartao'
import TextView from '../components/TextView'
import TextInputView from '../components/TextInputView'

const EditarContato = (props) => {
    const [clicouEditar, setClicouEditar] = useState(false)
    const [vetorEditado, setVetorEditado] = useState(props.contatos)
    const [contato, setContato] = useState(props.contato)

    const edit = () => {
        setClicouEditar(true)
    }

    let editar =
        <TextView
            nome={props.contato.item.nome}
            telefone={props.contato.item.telefone}
        />

    if (clicouEditar == true) {
        editar =
            <TextInputView
                contato={contato}
            />
    }
    return (
        <View style={styles.tela}>
            <Cartao>
                <View style={styles.editView}>
                    {editar}
                </View>
                <View styles={styles.buttonView}>
                    <Button
                        title="Editar"
                        onPress={edit}
                    />
                    <Button
                        title="Voltar"
                        onPress={() => {props.onVoltar(vetorEditado)}}
                    />
                </View>
            </Cartao>

        </View>

    )
}

const styles = StyleSheet.create({
    tela: {
        padding: 50,
    },
    editView: {
        flexDirection: 'row'
    },
    buttonView: {
        width: '80%'
    }
})

export default EditarContato