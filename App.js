import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import {Modal, Modal2, Modal3} from './components/RecipeCard';


const App = () => {
  // Exemplo de dados
  const data = [
    {id: '1', nome: 'Bolinhos de chuva tradicionais:' },
  ];
  const data2 =[
    {id: '1', nome: 'Bolo de chocolate fofinho:'},
  ]
  const data3 =[
    {id: '1', nome: 'Carne cozida com batatas:'},
  ]
  // Como renderizar cada item
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item.nome}</Text>
    </View>
  );
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const algumaModalAberto = modal || modal2 || modal3;
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Receitas de coisas bem maneirinhas(maneiras mesmo)</Text>
      <Text style={styles.title}>
      <FlatList
        data={data}                   // Os dados da lista
        keyExtractor={(item) => item.id}  // Chave única para cada item
        renderItem={renderItem}       // Como renderizar cada item
      />
      </Text>
      {!algumaModalAberto && (
      <>
      <TouchableOpacity style={styles.button} onPress={() =>setModal(true)}>
        <Text>Bolinhos de chuva tradicionais</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
      <FlatList data={data2} keyExtractor={(item) => item.id} renderItem={renderItem}></FlatList>
      </Text>

      <TouchableOpacity style={styles.button} onPress={() =>setModal2(true)}>
        <Text>Bolo de chocolate fofinho</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        <FlatList data={data3} keyExtractor={(item) => item.id} renderItem={renderItem}></FlatList>
      </Text>

        <TouchableOpacity style={styles.button} onPress={() => setModal3(true)}>
      <Text>Receita de carne cozida com batatas</Text>
      </TouchableOpacity>
      </>
      )}
    <Modal show={modal} close={() => setModal(false)}/>
    <Modal2 show={modal2} close={() => setModal2(false)}/>
    <Modal3 show={modal3} close={() => setModal3(false)}/>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDC46F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontSize: 22,
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20,
  },
})

export default App