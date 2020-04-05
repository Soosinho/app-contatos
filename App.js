import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [contato, setContato] = useState({nome: " ", telefone: " "})

  const [contatos, setContatos] = useState([])

  const [contadorContatos, setContadorContatos] = useState(0)

  //capturar o texto digitado
  const capturarNome = (nome) => {
    let nomeContato = nome
    let telefoneContato = contato.telefone
    setContato({
      nome: nomeContato,
      telefone: telefoneContato,
    })
  }
  const capturarTelefone = (telefone) => {
    let nomeContato = contato.nome
    let telefoneContato = telefone
    setContato({
      nome: nomeContato,
      telefone: telefoneContato,
    })
  }

  const adicionarContato = () => {
    setContatos((contatos) => {
      console.log(contatos)
      console.log(contato)
      
      setContadorContatos(contadorContatos + 1)
      
      return [...contatos, {key: contadorContatos.toString(), nome: contato.nome, telefone: contato.telefone}]
    })
  }

  return (
    <View style={styles.telaPrincipal}>
      <View style = {styles.contatoView}>
        <View style = {styles.contatoInput}>
        <TextInput
          placeholder = {'Nome'}
          onChangeText = {capturarNome}
          value = {contato.nome}
        />
        <TextInput
          placeholder = {'Telefone'}
          onChangeText = {capturarTelefone}
          value = {contato.telefone}
        />
        </View>
        <Button
          title = "+"
          onPress = {adicionarContato}
        />
      </View>
      <FlatList
        data = {contatos}
        renderItem = {
          contato => (
            <View style = {styles.itemNaLista}>
              <View>
                <Text>{contato.item.nome}</Text>
              </View>
              <View>
                <Text>{contato.item.telefone}</Text>
              </View>
            </View>
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
  contatoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#00000022',
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
  },
  contatoInput: {
    width: '80%',
    flexDirection: 'column',
    paddingRight: 2,
    paddingLeft: 2,
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#ffff4433',
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 3,
  },
});
