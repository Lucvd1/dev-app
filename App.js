import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Dimensions } from 'react-native';
import Menu from './components/Menu.js';
import Home from './components/Home.js';

export default function App() {
  const [nav, setNav] = useState('');

  //nieuwe manier voor uitvoeren function
  const navHandler = (t) => {
    setNav(t);
  }

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <Menu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#c9c7c7'
  },
  container: {
    borderRadius: 10,
    height: '90%',
    padding: 10,
    marginTop: 40,
    margin: 30,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: '#a8a8a8',
  },
});
