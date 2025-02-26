import React from "react";
import { TextInput, Button, View, Text, Alert, StyleSheet } from "react-native";

export default function Index() {
  const [name, setName] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      <Text style= {styles.title}>Bem vindo!</Text>
      <TextInput
        placeholder="Digite seu nome"
        onChangeText={setName}
        value={name}
        style={styles.input}>
      </TextInput>

      <Button
        title="Enviar"
        onPress={() => Alert.alert(`Olá ${name}!`)}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 24,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },

})
