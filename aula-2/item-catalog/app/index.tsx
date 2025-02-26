import { Text, SafeAreaView, View, FlatList, Image, StyleSheet, Button } from "react-native";

const PRODUTOS = [
  {id: '3321', nome: 'Produto 1'},
  {id: '3', nome:'Produto 2'},
  {id: '4', nome:'Produto 3'},
  
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
      />
    </SafeAreaView>
  );
}

const Item = ({titulo}) => (
  <View style={{ flexDirection: "row", padding: 20, margin: 0}}>
    <Image source={require('../assets/images/png.png')}
    style={styles.image} ></Image>
    <View style={{flex: 1, marginLeft: 20}}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.description}>Descrição</Text>
      <Button title="Comprar" onPress={() => {}} />
    </View>
    
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'roboto',
    fontWeight: '400',
  },
  description: {
    fontSize: 16,
    fontFamily: 'roboto',
    fontWeight: '200',
  },
  image: {
    borderRadius: 10,
    width: 124,
    height: 124,
  }

});
