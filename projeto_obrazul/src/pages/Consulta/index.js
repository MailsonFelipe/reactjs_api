import React from 'react';
import './estilos.css';

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
    //alert(busca);
}

export const Busca = React.createContext(busca);

export default Consulta;