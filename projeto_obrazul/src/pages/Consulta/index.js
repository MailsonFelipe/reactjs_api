import React from 'react';
import './estilos.css';
import {result} from '/workspace/reactjs_api/projeto_obrazul/src/App.js'

function Consulta ()
{
    return(
    <>
        <div className="logo">
             <img
               src="https://static.obrazul.com.br/static/img/obrazul-logo-bg.png"
               alt="Logo da Obrazul"
            />
        </div>

        <div className="principal">
            <div className="texto">
                Olá! Bem vind@. O que você procura?
            </div>

            <div className="entrada">
               <input
                    id="busca"
                  type="text"
                  placeholder="Faça a sua busca"
               />
            </div>

            <button onClick={acionaBotao} type="submit" className="botao">
               Pesquisar
            </button>   
        </div>
    </>
    )
}

var busca = '';
function acionaBotao(){
    busca = document.getElementById("busca").value;
    if(busca === ''){
        alert("Digite algo");
        console.log(result);
    }
}

export default Consulta;