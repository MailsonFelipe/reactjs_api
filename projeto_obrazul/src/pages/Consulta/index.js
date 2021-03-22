import React from 'react';
import './estilos.css';
import {result} from '/workspace/reactjs_api/projeto_obrazul/src/App.js'
import swal from 'sweetalert';

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
    busca = busca.toLowerCase();
    
    if(busca === ''){
        swal("Por favor, insira uma palavra!", "Tente novamente.");
    }

    var obj = JSON.parse(JSON.stringify(result));
    var flag = 0;

    Object.keys(obj).forEach(function(key)
    {
          if((obj[key].fullname.toLowerCase()).includes(busca)) // lowecase para garantir que as strings serao iguais
          {
                console.log(obj[key]);
                flag = 1;
          }
    });

    if (flag === 0)
    {
        swal("Ooops!", "Não encontramos o que procura!", "info");
    }

    //window.location.reload(true);
      
}

export default Consulta;