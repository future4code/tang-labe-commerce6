import React from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import styled from 'styled-components'
import Outfit1 from '../imgs/Outfit1.png'
import Outfit2 from '../imgs/Outfit2.png'   
import Outfit4 from "../imgs/Outfit4.png"
import Outfit5 from "../imgs/Outfit5.png"
import Outfit6 from "../imgs/Outfit6.png"


export default class Produtos extends React.Component {
    state = {
        produtos: [
            {
             id: Date.now(),
             name: "Traje Espacial Despojado Porém Chique",
             preco: 50,
             img: Outfit1
            },
            {
             id: Date.now(),
             name:"Traje Espacial Esporte Chique",
             preco: 100,
             img: Outfit2
            },
            {
             id: Date.now(),
             name:"Traje Espacial Samus Aram Afrontosa",
             preco: 150,
             img: Outfit4
            },
            {
             id: Date.now(),
             name:"Traje Espacial Bafafá Certeiro",
             preco: 200,
             img: Outfit5
            },
            {
             id: Date.now(),
             name:"Traje Espacial Samus Aram Afrontosa",
             preco: 250,
             img: Outfit6
            },
            {
             id: Date.now(),
             name:"Traje Espacial Samus Aram Afrontosa",
             preco: 300,
             img: Outfit6
            },
        ],
        produtosCarrinho: "",
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

    adicionarAoCarrinho = () => {
        const produtoCarrinho = {
            name: this.state.produtos.name,
            preco: this.state.produtos.preco
        }
        const novosProdutos = [...this.state.produtos, produtoCarrinho]
        this.setState({produtos: novosProdutos})
        
    }

    /* adicionarAoCarrinho = (produtoEspecifico) => {
    const copiaDosProdutos = this.state.produtos.filter((elemento) => {
        if(elemento.id !== Date.now()){
            return false;
        } else {
            return <p>{elemento.name} - {elemento.preco}</p>
        }
    });
       const produtosNoCarrinho = [...this.state.produtos, copiaDosProdutos]
       this.setState({produtos: produtosNoCarrinho}) 
    }       
     */
    render(){
         const produtoNovo = this.state.produtos.map((novaListaDeProdutos) => {
           /*  if(novaListaDeProdutos.id === Date.now) */
            return(
              <div>
                <p>{novaListaDeProdutos.name}</p>
                <p>{novaListaDeProdutos.preco}</p>
              </div>
            )
          }
          ) 
        const Filtro = this.state.produtos.map((produto) =>{
            if(this.state.valorDoProdutoMin !== ""){
                if(this.state.valorDoProdutoMin <= produto.preco){
                    return <div className="Produto">
                        <img src={produto.img}/>
                        <p>{produto.name}</p>
                        <p>R$ {produto.preco}</p>
                        <button id="botaoAdicionar" onClick={this.adicionarAoCarrinho}>Comprar</button>
                    </div>
                }
            }

            else if(this.state.valorDoProdutoMax !== ""){
                if(this.state.valorDoProdutoMax >= produto.preco){
                    return <div className="Produto">
                        <img src={produto.img}/>
                        <p>{produto.name}</p>
                        <p>R$ {produto.preco}</p>
                        <button id="botaoAdicionar" onClick={this.adicionarAoCarrinho}> Comprar</button>
                    </div>
                }
            }

            else if(this.state.valorDoProdutoBusca !== ""){
                if(this.state.valorDoProdutoBusca === produto.name){
                    return <div className="Produto">
                        <img src={produto.img}/>
                        <p>{produto.name}</p>
                        <p>R$ {produto.preco}</p>
                        <button id="botaoAdicionar" onClick={this.adicionarAoCarrinho}>Comprar</button>
                    </div>
                }
            }

            else{
                return <div className="Produto">
                    <img src={produto.img}/>
                    <p>{produto.name}</p>
                    <p>R$ {produto.preco}</p>
                    <button id="botaoAdicionar" onClick={this.adicionarAoCarrinho}>Comprar</button>
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
                        <p>{produtoNovo}</p>
                    </div>

                </div>
            </div>
        );
        }
    }

