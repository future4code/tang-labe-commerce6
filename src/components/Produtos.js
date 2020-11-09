import React from 'react';
import styled from 'styled-components'
import Outfit1 from '../imgs/Outfit1.png'
import Outfit2 from '../imgs/Outfit2.png'   
import Outfit4 from "../imgs/Outfit4.png"
import Outfit5 from "../imgs/Outfit5.png"
import Outfit6 from "../imgs/Outfit6.png"

const produtos = [
    {name: "Traje Espacial Despojado Porém Chique",
     preco: 50,
     img: Outfit1
    },
    {name:"Traje Espacial Esporte Chique",
     preco: 100,
     img: Outfit2
    },
    {name:"Traje Espacial Samus Aram Afrontosa",
     preco: 150,
     img: Outfit4
    },
    {name:"Traje Espacial Bafafá Certeiro",
     preco: 200,
     img: Outfit5
    },
    {name:"Traje Espacial Samus Aram Afrontosa",
     preco: 250,
     img: Outfit6
    },
    {name:"Traje Espacial Samus Aram Afrontosa",
     preco: 300,
     img: Outfit6
    }
]

export default class Produtos extends React.Component {
    state = {
        valorDoProdutoMin: "",
        valorDoProdutoMax: "",
        valorDoProdutoBusca: "",
        carrinho: [],
        valorTotalDaCompra: 0.00
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

    addcarrinho = (produto) => {
        const produtoNoCarrinho = {
            name: produto.name,
            preco: produto.preco
        }

        const valorDoCarrinho = Number(this.state.valorTotalDaCompra) + produtoNoCarrinho.preco
        this.setState({valorTotalDaCompra: valorDoCarrinho})

        const novoCarrinho = [...this.state.carrinho, produtoNoCarrinho]
        this.setState({carrinho: novoCarrinho})
    }

    removeDoCarrinho = (name) => {
        const novoCarrinho = this.state.carrinho.map((produto) => {
          if(produto.name === name) {
            const valorDoCarrinho = 0.00
            this.setState({valorTotalDaCompra: valorDoCarrinho})
            return {...produto}
          }
          
          return produto
        }).filter((produto) => produto.name !== name)
    
        this.setState({carrinho: novoCarrinho})
    }

    render(){
        
        const carrinhoDeCompras = this.state.carrinho.map((produto) => {
            return <div>
                <p>{produto.name}</p>
                <p onClick={() => this.removeDoCarrinho(produto.name)}>R$ {produto.preco}</p>
            </div>
        })

        const Filtro = produtos.map((produto) =>{
            if(this.state.valorDoProdutoMin !== ""){
                if(this.state.valorDoProdutoMin <= produto.preco){
                    return <div className="Produto">
                        <img src={produto.img}/>
                        <p>{produto.name}</p>
                        <p>R$ {produto.preco}</p>
                        <button id="botaoAdicionar">Comprar</button>
                    </div>
                }
            }

            else if(this.state.valorDoProdutoMax !== ""){
                if(this.state.valorDoProdutoMax >= produto.preco){
                    return <div className="Produto">
                        <img src={produto.img}/>
                        <p>{produto.name}</p>
                        <p>R$ {produto.preco}</p>
                        <button id="botaoAdicionar">Comprar</button>
                    </div>
                }
            }

            else if(this.state.valorDoProdutoBusca !== ""){
                if(this.state.valorDoProdutoBusca === produto.name){
                    return <div className="Produto">
                        <img src={produto.img}/>
                        <p>{produto.name}</p>
                        <p>R$ {produto.preco}</p>
                        <button id="botaoAdicionar">Comprar</button>
                    </div>
                }
            }

            else{
                return <div className="Produto">
                    <img src={produto.img}/>
                    <p>{produto.name}</p>
                    <p>R$ {produto.preco}</p>
                    <button id="botaoAdicionar" onClick={() => this.addcarrinho(produto)} >Comprar</button>
                </div>
            }
        })

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
                        {Filtro}
                    </div>

                    <div className="Filtros">
                        <h3>Carrinho</h3>
                        {carrinhoDeCompras}
                        <h4>Valor Total</h4>
                        {this.state.valorTotalDaCompra}
                    </div>

                </div>
            </div>
        );
    }
}