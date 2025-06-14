import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from './components/RecipeCard';

const App = () => {
  // Exemplo de dados
  const data = [
    {id: '1', nome: '2 ovos' },
    {id: '2', nome: '1 xícara de chá de açúcar' },
    {id: '3', nome: '1 xícara de chá de leite' },
    {id: '4', nome: '2 e 1/2 xícara de chá de farinha de trigo' },
    {id: '5', nome: '1 colher de sopa de fermento em pó' },
    {id: '6', nome: 'Uma pitada de sal'},
    {id: '7', nome: 'Óleo para fritar'},
    {id: '8', nome: 'Açúcar e canela a gosto para polvilhar'},
    {id: '9', nome: 'Modo de preparo:'},
    {id: '10',nome: 'Misture os ingredientes'},
    {id: '11',nome: 'Frite os bolinhos'},
    {id: '12',nome: 'Escorra'},
    {id: '13',nome: 'Finalize'}
  ];
  // Como renderizar cada item
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item.nome}</Text>
    </View>
  );
  const [modal, setModal] = useState(false)
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Receita de Bolinho de Chuva tradicional</Text>
      <Text style={styles.title}>Ingredientes:</Text>
      <Text style={styles.title}>
      <FlatList
        data={data}                   // Os dados da lista
        keyExtractor={(item) => item.id}  // Chave única para cada item
        renderItem={renderItem}       // Como renderizar cada item
      />
      </Text>
      <TouchableOpacity style={styles.button} onPress={() =>setModal(true)}>
        <Text>veja com mais detalhes</Text>
      </TouchableOpacity>
      <Modal show={modal} close={() => setModal(false)}/>
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