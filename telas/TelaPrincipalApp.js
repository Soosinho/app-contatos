import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ContatoInput from '../components/ContatoInput'
import ContatoItem from '../components/ContatoItem'

const TelaPrincipal = (props) => {
  const [contatos, setContatos] = useState(props.contatos)

  const [contadorContatos, setContadorContatos] = useState(props.contador)

  const adicionarContato = (contato) => {
    setContatos((contatos) => {
      console.log(contato)

      props.contador += 1

      setContadorContatos(contadorContatos + 1)

      return [...contatos, { key: contadorContatos.toString(), nome: contato.nome, telefone: contato.telefone }]
    })
  }

  const removerContato = (keyRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyRemovida
      })
    })
  }

  return (
    <View style={styles.telaPrincipal}>
      <ContatoInput
        onAdicionarContato = {adicionarContato}
      />

      <FlatList
        data={contatos}
        renderItem={
          contato => (
            <ContatoItem
              chave = {contato.item.key}
              nome = {contato.item.nome}
              telefone = {contato.item.telefone}
              onDelete = {removerContato}
              onContato = {() => {props.onContato(contato, contatos, contadorContatos)}}
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    padding: 50
  },
});

export default TelaPrincipal