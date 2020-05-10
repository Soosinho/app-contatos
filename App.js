import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TelaPrincipal from './telas/TelaPrincipalApp'
import EditarContato from './telas/EditarContato';

export default function App() {
  const [contatoParaEditar, setContatoParaEditar] = useState({ nome: "", telefone: "" })
  const [vetorContatos, setVetorContatos] = useState([])
  const [contador, setContador] = useState(0)

  const [clicouContato, setClicouContato] = useState(false)

  const editarContato = (contato, contatos, contador) => {
    setClicouContato(true)
    setContatoParaEditar(contato)
    setVetorContatos(contatos)
    setContador(contador)
  }

  const voltar = (vetorEditado) => {
    setClicouContato(false)
    setVetorContatos(vetorEditado)
  }

  let conteudo = 
  <TelaPrincipal 
    contatos={vetorContatos}
    onContato={editarContato} 
    contador={contador}
  />

  if (clicouContato == true) {
    conteudo = <EditarContato
      contato={contatoParaEditar}
      contatos={vetorContatos}
      onVoltar={voltar}
    />
  }

  return (
    <View style={styles.tela}>
      {conteudo}
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {

  },
});
