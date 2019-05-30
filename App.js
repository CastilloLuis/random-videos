import React from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

export default class App extends React.Component {
  render() {
    return (
      <Home>
        <Header/>
        <Text>BUSCADOR</Text>
        <Text>CATEGORIAS</Text>
        <Text>SUGERENCIAS</Text>
      </Home>
    );
  }
}

