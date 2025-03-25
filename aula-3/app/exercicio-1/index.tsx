import { Text, SafeAreaView, View, FlatList, Image, StyleSheet, Pressable } from "react-native";

const PRODUTOS = [
  {id: '2', nome:'Produto 1'},
  {id: '3', nome:'Produto 2'},
  {id: '4', nome:'Produto 3'},
  {id: '5', nome:'Produto 4'},
  {id: '6', nome:'Produto 5'},
  {id: '7', nome:'Produto 6'},
  
];

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={PRODUTOS}
        renderItem={({item}) => <Item titulo={item.nome} />}
        keyExtractor={item => item.id}
        style={{flex: 1, width: '100%'}}
      />


    </SafeAreaView>
  );
}

const Item = ({titulo}) => (
  <View style={{ flexDirection: "row", padding: 20, margin: 0}}>
    <Image source={require('../../assets/images/png.png')}
    style={styles.image} ></Image>
    <View style={{flex: 1, marginLeft: 20}}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.description}>Descrição</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#2980b9' : '#3498db' },
        ]}
        onPress={() => alert('Clicado!')}
      >
        <Text style={styles.text}>Adicionar</Text>
      </Pressable>
    </View>
    
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'space-mono',
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    fontFamily: 'space-mono',
    fontWeight: '600',
  },
  image: {
    borderRadius: 10,
    width: 124,
    height: 124,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  }

});
