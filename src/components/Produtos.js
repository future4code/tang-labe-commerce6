import React from 'react';
import styled from 'styled-components'
import Outfit1 from '../imgs/Outfit1.png'
import Outfit2 from '../imgs/Outfit2.png'   
import Outfit4 from "../imgs/Outfit4.png"
import Outfit5 from "../imgs/Outfit5.png"
import Outfit6 from "../imgs/Outfit6.png"


export default class Produtos extends React.Component {
    state = {
        valorDoProdutoMin: "",
        valorDoProdutoMax: "",
        valorDoProdutoBusca: ""
    }

    onchangeValorDoProdutoMin = (event) => {
        this.setState({valorDoProdutoMin: event.target.value})
    }

    onchangeValorDoProdutoMax = (event) => {
        this.setState({valorDoProdutoMax: event.target.value})
    }

    onchangeValorDoProdutoBusca = (event) => {
        this.setState({valorDoProdutoBusca: event.target.value})
    }

    render(){
        const valordoproduto = [50, 100, 150, 200, 250, 300]
        /* caso de teste
        const produtos = () => {
            for (let i = 0; i < valordoproduto.length; i++) {
                if(valordoproduto[i] >= this.state.valorDoProdutoMin){
                    return <div className="Produto">
                        <img src={Outfit1}/>
                        <p>Traje Espacial Despojado Porém Chique</p>
                        <p>R$ {valordoproduto[0]}</p>
                        <button id="botaoAdicionar">Comprar</button>
                    </div>
                }
            }
        }
        */

        return (
            <div>
                <div className="TodosOsProdutos">

                    <div className="Filtros">
                        <h3>Filtros</h3>
                        <label>Valor mínimo</label>
                        <input value={this.state.valorDoProdutoMin} onChange={this.onchangeValorDoProdutoMin}/>
                        <br/>
                        <label>Valor máximo</label>
                        <input value={this.state.valorDoProdutoMax} onChange={this.onchangeValorDoProdutoMax}/>
                        <br/>
                        <label>Buscar produto</label>
                        <input value={this.state.valorDoProdutoBusca} onChange={this.onchangeValorDoProdutoBusca}/>
                    </div>

                    <div className="PrimeiraLinha">
                        
                        <div className="Produto">
                            <img src={Outfit1}/>
                            <p>Traje Espacial Despojado Porém Chique</p>
                            <p>R$ {valordoproduto[0]}</p>
                            <button id="botaoAdicionar">Comprar</button>
                        </div>

                        <div className="Produto">
                            <img src={Outfit2}/>
                            <p>Traje Espacial Esporte Chique</p>
                            <p>R$ {valordoproduto[1]}</p>
                            <button id="botaoAdicionar">Comprar</button>
                        </div>

                        <div className="Produto">
                            <img src={Outfit5}/>
                            <p>Traje Espacial Bafafá Certeiro</p>
                            <p>R$ {valordoproduto[2]}</p>
                            <button id="botaoAdicionar">Comprar</button>
                        </div>

                        <div className="Produto">
                            <img src={Outfit4}/>
                            <p>Traje Espacial Samus Aram Afrontosa</p>
                            <p>R$ {valordoproduto[3]}</p>
                            <button id="botaoAdicionar">Comprar</button>
                        </div>

                        <div className="Produto">
                            <img src={Outfit6}/>
                            <p>Traje Espacial Samus Aram Afrontosa</p>
                            <p>R$ {valordoproduto[4]}</p>
                            <button id="botaoAdicionar">Comprar</button>
                        </div>

                        <div className="Produto">
                            <img src={Outfit6}/>
                            <p>Traje Espacial Samus Aram Afrontosa</p>
                            <p>R$ {valordoproduto[5]}</p>
                            <button id="botaoAdicionar">Comprar</button>
                        </div>
                    </div>

                    <div className="Filtros">
                        <h3>Carrinho</h3>
                
                    </div>

                </div>
            </div>
        );
    }
}