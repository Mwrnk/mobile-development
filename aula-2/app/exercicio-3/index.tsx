import { View, Text, TextInput, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import placehold from '../../assets/images/placehold.png'
export default function index() {
  const [itens, setItens] = React.useState([])
  const [text,setText] = React.useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Adicione um item! </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder='Digite o nome do item'
        />
        <Pressable 
          onPress={() => {
            setItens([...itens, text])
            setText('')
          }}
        >
          <Text style={styles.button}>Adicionar</Text>
        </Pressable>
      </View>
      <ScrollView
        style={{width: '100%'}}>
        {itens.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <Image source={placehold} style={styles.image} />
            <Text style={styles.itemText} key={index}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'regular',
    margin: 12
  },
  itemText: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'regular',
    margin: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "gray"
  },
  button: {
    backgroundColor: "#79D7BE",
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: 100,
  },
  image: {
    width: 64,
    height: 64,
    margin: 10,
    borderRadius: 5
  },
  itemCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  }
})
