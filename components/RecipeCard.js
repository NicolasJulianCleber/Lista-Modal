import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Modal = ({show, close}) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })
  const openModal = () => {
  Animated.sequence([
    Animated.timing(state.container, { toValue: 0, duration: 100 }),
    Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
    Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
  ]).start()
}
const closeModal = () => {
  Animated.sequence([
    Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
    Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
    Animated.timing(state.container, { toValue: height, duration: 100 })
  ]).start()
}
useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <View style={styles.indicator} />

        <Text style={styles.text}>
          Receba a receita mais detalhada: Receita de Bolinho de Chuva Tradicional
        </Text>
        <Text style={styles.text}>
          Ingredientes:
          2 ovos: Eles vão ajudar a dar estrutura e leveza na massa.

          1 xícara de açúcar: Dá o sabor doce típico do bolinho de chuva.

          1 xícara de leite: Para deixar a massa na consistência certa, nem muito líquida, nem muito dura.

          2 e 1/2 xícaras de farinha de trigo: Essa é a base da massa.

          1 colher (sopa) de fermento em pó: Faz o bolinho crescer e ficar fofinho.

          1 pitada de sal: Realça o sabor.

          Óleo para fritar: Use uma quantidade suficiente para os bolinhos ficarem submersos no óleo quente.

          Para polvilhar depois de frito:

          Açúcar + Canela (misture a gosto, geralmente 1 xícara de açúcar para 1 colher de sopa de canela).
        </Text>
        <Text style={styles.text}>
          Modo de preparo detalhado:
        </Text>
        <Text style={styles.text}>
          1. Preparando a massa:
          Em uma tigela, quebre os ovos e misture bem com o açúcar usando um garfo ou um batedor (fouet). Isso ajuda a deixar os bolinhos mais fofinhos.

          Depois, acrescente o leite e continue mexendo.

          Agora, vá colocando a farinha de trigo aos poucos, misturando sempre, para não empelotar.

          Coloque uma pitadinha de sal (é só uma pitada mesmo, para equilibrar o sabor doce).

          Por último, coloque o fermento em pó e misture devagar. O fermento é o que faz os bolinhos crescerem e ficarem macios por dentro.
        </Text>
        <Text style={styles.text}>
          2. Fritando os bolinhos:
          Pegue uma panela funda e coloque bastante óleo (o suficiente para os bolinhos boiarem quando fritarem).

          Deixe o óleo esquentar bem, mas sem deixar queimar. Uma dica para saber o ponto é jogar um pouquinho de massa no óleo: se subir rapidamente e começar a fritar, está bom.

          Com a ajuda de duas colheres, pegue uma porção de massa (do tamanho de uma colher de sopa) e coloque no óleo quente.

          Frite os bolinhos até ficarem douradinhos de todos os lados, virando eles no óleo se precisar.
        </Text>
        <Text style={styles.text}>
          3. Depois de fritar:
          Retire os bolinhos com uma escumadeira e coloque em um prato com papel toalha, para tirar o excesso de óleo.
        </Text>
        <Text style={styles.text}>
          4. Finalizando:
          Misture o açúcar com a canela em um prato ou tigela.

          Passe os bolinhos ainda quentes nessa mistura para ficarem com aquela casquinha doce e perfumada.
        </Text>
        <Text style={styles.text}>
          E saiba que não entendi oq significa: "Toque em qualquer receita da lista"
        </Text>

        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={{ color: '#fff' }}>Fechar</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  ) 
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '50%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
})

export default Modal