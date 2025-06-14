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

        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={{ color: '#fff' }}>Fechar</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  ) 
}
const Modal3 = ({show, close}) => {
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
          Receba a receita mais detalhada: Receita de Cane Cozida com Batata
        </Text>
        <Text style={styles.text}>
          Ingredientes:
          500g de carne bovina (acém, músculo, paleta ou peito) cortada em cubos médios

          4 batatas médias cortadas em pedaços grandes (não muito pequenos para não desmancharem)

          1 cebola grande picada

          2 dentes de alho picados ou amassados

          1 tomate maduro picado (opcional, dá um sabor extra ao molho)

          1 colher (sopa) de óleo ou azeite

          1 colher (chá) de colorau ou páprica (opcional, para dar cor e sabor)

          Sal e pimenta-do-reino a gosto

          1 folha de louro (opcional, para dar aroma)

          Água quente (aproximadamente 800 ml, o suficiente para cobrir a carne no início)

          Cheiro-verde (salsinha e cebolinha) a gosto, para finalizar
        </Text>
        <Text style={styles.text}>
          Modo de preparo:
        </Text>
        <Text style={styles.text}>
          1. Preparando os ingredientes:
          Corte a carne em cubos de tamanho médio.

          Descasque e pique o alho e a cebola.

          Descasque as batatas e corte em pedaços grandes.

          Pique o tomate, caso use.
        </Text>
        <Text style={styles.text}>
          2. Selando a carne:
          Aqueça o óleo na panela de pressão (ou panela comum).

          Coloque a carne aos poucos (para não juntar água) e doure bem todos os lados.
          Esse processo chama-se selar a carne e ajuda a manter a suculência.
        </Text>
        <Text style={styles.text}>
          3. Refogando os temperos:
          Depois da carne estar bem dourada, acrescente a cebola picada.

          Refogue até a cebola murchar e começar a dourar.

          Acrescente o alho e refogue por mais 1 minuto.

          Se quiser, adicione o tomate e o colorau ou páprica. Isso vai deixar o molho mais encorpado e com uma cor bonita.
        </Text>
        <Text style={styles.text}>
          4. Cozinhando a carne:
          Tempere com sal, pimenta-do-reino e coloque a folha de louro.

          Adicione água quente até cobrir bem a carne (cerca de 2 dedos acima da carne).

          Feche a panela de pressão e, depois que pegar pressão, conte cerca de 25 a 30 minutos.

          Se estiver fazendo em panela comum: cozinhe em fogo médio, com a panela tampada, por aproximadamente 1 hora, mexendo de vez em quando e completando com mais água se necessário.
        </Text>
        <Text style={styles.text}>
          5. Adicionando as batatas:
          Depois da carne estar macia, desligue o fogo e espere a pressão sair naturalmente.

          Abra a panela, adicione as batatas cortadas.

          Se necessário, acrescente um pouco mais de água (para formar um caldinho bom de comer com arroz).

          Deixe cozinhar sem pressão por cerca de 10 a 15 minutos, até as batatas ficarem macias, mas sem desmanchar.
        </Text>
        <Text style={styles.text}>
          6. Finalização:
          Ajuste o sal, se necessário.

          Se quiser, adicione um punhado de cheiro-verde picado por cima antes de servir.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={{ color: '#fff' }}>Fechar</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  ) 
}
const Modal2 = ({show, close}) => {
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
        <View style={styles.indicator}/>

        <Text style={styles.text}>
          Receita de Bolo de Chocolate Fofinho
        </Text>
        <Text style={styles.text}>
          Ingredientes:
          Para a massa:
          3 ovos

          1 xícara de chá de açúcar

          1/2 xícara de chá de óleo (pode ser de soja, girassol ou milho)

          1 xícara de chá de leite

          1 xícara de chá de chocolate em pó (ou cacau em pó, se quiser mais forte)

          2 xícaras de chá de farinha de trigo

          1 colher de sopa de fermento em pó

          Para a calda/cobertura (opcional, mas deliciosa!):

          1 colher (sopa) de manteiga

          3 colheres (sopa) de chocolate em pó

          1/2 xícara (chá) de leite

          4 colheres (sopa) de açúcar
        </Text>
        <Text style={styles.text}>
          Modo de preparo:
        </Text>
        <Text style={styles.text}>
          1. Preparo da Massa:

          Em uma tigela grande, bata os ovos com o açúcar até formar um creme claro.

          Adicione o óleo e o leite, misture bem.

          Acrescente o chocolate em pó e mexa até ficar homogêneo.

          Aos poucos, coloque a farinha de trigo, mexendo para não empelotar.

          Por último, adicione o fermento e misture levemente.


        </Text>
        <Text style={styles.text}>
          2. Assar:

          Despeje a massa em uma forma untada e enfarinhada.

          Leve ao forno pré-aquecido a 180°C por aproximadamente 35 a 40 minutos.

          Faça o teste do palito: espete um palito no centro do bolo, se sair limpo, está pronto.
        </Text>
        <Text style={styles.text}>
          3 .Cobertura:

          Misture todos os ingredientes em uma panela.

          Leve ao fogo médio, mexendo sempre, até começar a ferver e engrossar um pouco
        </Text>
        <Text style={styles.text}>
          4.Finalização:
          Assim que tirar o bolo do forno, faça furinhos na superfície com um garfo ou palito (isso ajuda a calda penetrar).

          Despeje a cobertura ainda quente sobre o bolo.

          Se quiser, jogue granulado, raspas de chocolate ou até coco ralado por cima.
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

export {Modal, Modal2, Modal3};