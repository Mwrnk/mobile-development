import React, { Component } from 'react'
import { Text, ScrollView, View, Image, StyleSheet } from 'react-native'
export default class index extends Component {
  render() {
    const img1 = require('../../assets/images/001.png')
    const img2 = require('../../assets/images/002.png')
    const img3 = require('../../assets/images/003.png')
    const img4 = require('../../assets/images/004.png')
    const img5 = require('../../assets/images/005.png')
    const img6 = require('../../assets/images/006.png')
    return (
      <View style={styles.container}>
        <ScrollView >
          <Text style={styles.text}>Pokémons!</Text>
          <Image source={img1} style={styles.image} />
          <Image source={img2} style={styles.image} />
          <Image source={img3} style={styles.image} />
          <Image source={img4} style={styles.image} />
          <Image source={img5} style={styles.image} />
          <Image source={img6} style={styles.image} />
        </ScrollView>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    margin: 10
  },
  text: {
    fontFamily: 'roboto',
    fontSize: 32,
    fontWeight: 'bold'
  }
})
