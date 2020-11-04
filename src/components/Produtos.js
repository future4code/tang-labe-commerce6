import React from 'react';
import styled from 'styled-components'
import Masculino from '../imgs/masculino.jpg'
import Samus from '../imgs/samus.jpg'
import Feminino from "../imgs/modelofeminino.jpg"
import Suit from "../imgs/suit.jpg"

const BotaoAdicionarProduto = styled.button `
    background-color: black;
    font-family: 'Sans-serif';
`


export default class Produtos extends React.Component {

  render(){
    return (
        <div>
          <div className="TodosOsProdutos">
                <div className="Produto">
                    <img src={Masculino}/>
                    <p>Traje Espacial Despojado Porém Chique</p>
                    <button>Comprar</button>
                </div>
                <div className="Produto">
                    <img src={Feminino}/>
                    <p>Traje Espacial Esporte Chique</p>
                    <button>Comprar</button>
                </div>
                <div className="Produto">
                    <img src={Suit}/>
                    <p>Traje Espacial Bafafá Certeiro</p>
                    <button>Comprar</button>
                </div>
                <div className="Produto">
                    <img src={Samus}/>
                    <p>Traje Espacial Samus Aram Afrontosa</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
      );
  }
}