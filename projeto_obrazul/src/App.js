import React, { Component } from 'react';
import api from './api';
import Consulta from './pages/Consulta';

class App extends Component
{
    state = {dados: []}
    
    async componentDidMount()
    {
        const resposta = await api.get('');
        this.setState({filmes: resposta.data});
        console.log(resposta.data);
    }
    

    render() {
    return (
      <Consulta/>
    );
  };
}



export default App;
