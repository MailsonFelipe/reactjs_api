import React, { Component } from 'react';
import api from './api';
import Consulta from './pages/Consulta';
export var result = true; // variavel global a ser exportada para o modulo Consulta/index.js


class App extends Component
{
    state = {dados: []}
    
    async componentDidMount()
    {
        const resposta = await api.get(); // fazendo metodo get
        this.setState({dados: resposta.data});
    }

    render() {
        var {dados} = this.state;
        result = dados.products; //copiando para 'result' a resposta da API
        return(
            <Consulta/>
        )
    }
}

export default App;
