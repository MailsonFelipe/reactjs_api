import React, { Component } from 'react';
import api from './api';
import Consulta from './pages/Consulta';
//import {Busca} from './pages/Consulta/index';

class App extends Component
{
    state = {dados: []}
    
    async componentDidMount()
    {
        const resposta = await api.get('');
        this.setState({dados: resposta.data});
        console.log(resposta.data)
    }
    
    

    render() {
        
    return (
      <Consulta/>
    );
  };
}



export default App;
