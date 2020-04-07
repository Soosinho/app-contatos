import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ContatoInput from './components/ContatoInput'
import ContatoItem from './components/ContatoItem'

export default function App() {
  const [contatos, setContatos] = useState([])

  const [contadorContatos, setContadorContatos] = useState(0)

  const adicionarContato = (contato) => {
    setContatos((contatos) => {
      console.log(contato)

      setContadorContatos(contadorContatos + 1)

      return [...contatos, { key: contadorContatos.toString(), nome: contato.nome, telefone: contato.telefone }]
    })
    console.log(contatos)
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
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    padding: 50,

  },
});
