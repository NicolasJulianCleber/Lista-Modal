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
          Receba a receita: Receita de Bolinho de Chuva Tradicional
Ingredientes:
2 ovos

1 xícara (chá) de açúcar

1 xícara (chá) de leite

2 e 1/2 xícaras (chá) de farinha de trigo

1 colher (sopa) de fermento em pó

1 pitada de sal

Óleo para fritar

Para polvilhar:

Açúcar e canela a gosto

Modo de Preparo:
Misture os ingredientes:

Em uma tigela, bata os ovos com o açúcar até formar um creme.

Adicione o leite e misture bem.

Aos poucos, adicione a farinha de trigo e a pitada de sal, mexendo até formar uma massa lisa e um pouco grossa (não líquida demais).

Por último, adicione o fermento e mexa delicadamente.

Frite os bolinhos:

Aqueça o óleo em fogo médio.

Com a ajuda de duas colheres (ou com as mãos se preferir), vá pegando porções da massa e despejando no óleo quente.

Frite até os bolinhos ficarem douradinhos por fora.

Escorra:

Retire os bolinhos com uma escumadeira e coloque sobre papel toalha para escorrer o excesso de óleo.

Finalize:

Passe os bolinhos ainda quentes em uma mistura de açúcar com canela. E saiba que não entendi oq significa: "Toque em qualquer receita da lista"
        </Text>

        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={{ color: '#fff' }}>Close</Text>
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
    marginTop: 50,
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