import React from 'react';
import './App.css';
import Head from "./components/Header"
import Produtos from "./components/Produtos"


export default class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Produtos/>
        <div className="Produtos">
          
        </div>
      </div>
    )
  }
}
