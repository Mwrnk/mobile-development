import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

export default function index() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login</Text>
      <Text style={styles.subtitle}>Digite seu e-mail e senha para fazer login.</Text>
     
      <TextInput
      style={styles.input}
      placeholder='Email'
      onChangeText={setEmail}
      value={email}
      />

      <TextInput
      style={styles.input}
      placeholder='Senha'
      onChangeText={setPassword}
      value={password}
      />

      <Pressable
      onPress={()=> {setIsLoading(!isLoading)
        setTimeout(() => {
          setIsLoading(false)
          setEmail('')
          setPassword('')
        }, 3000);
      }}>
        <Text style={styles.button}>Fazer login</Text>
      </Pressable>

      {isLoading && <ActivityIndicator/>}
      
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    padding:10
  },
  title: {
    fontSize: 32,
    fontWeight:'700',
    margin:10,
    marginBottom:0
  },
  subtitle: {
    fontSize:16,
    fontWeight: '300',
    margin:10,
    color:'gray',
    marginBottom: 10
  },
  input : {
    height: 40,
    width: '100%',
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc'
  },
  button: {
    backgroundColor: 'dodgerblue',
    color:'white',
    fontWeight: '700',
    margin: 12,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    elevation: 3,
  }


})
