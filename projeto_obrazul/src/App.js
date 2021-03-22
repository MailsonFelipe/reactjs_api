import React, { Component } from 'react';
import api from './api';
import Consulta from './pages/Consulta';
export var result = true;


class App extends Component
{
    state = {dados: []}
    
    async componentDidMount()
    {
        const resposta = await api.get();
        this.setState({dados: resposta.data});
    }

    render() {
        var {dados} = this.state;
        result = dados.products;
        //console.log(dados.products)

        //const booleanos = Object.keys(dados).filter(dado => dados[dado] === "ARGAMASSA")
        //console.log("Tem", booleanos);

        return(
            <Consulta/>
        )
    }
}

export default App;
