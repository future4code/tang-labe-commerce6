import React from 'react';
import styled from "styled-components"
import Produtos from './Produtos';
import Logo from '../imgs/Capacete_Logo.jpeg'


const Menu = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f7f7f7;
`
const Cadalist = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`

const Cadali = styled.li`
    align-self: center;
    margin-right: 50px;
`
const LogoEstilizado = styled.img `
    width: 12vw;
    height: 15vh;
    margin-right: 20px;
`
const imagem = styled.img


export default class Head extends React.Component{

    render(){

        return <div>
        <Menu>
            <Cadalist>
                <LogoEstilizado src={Logo}/>
                <Cadali>Capacetes</Cadali>
                <Cadali>Trajes</Cadali>
                <Cadali>Botas</Cadali>
                <Cadali>Luvas</Cadali>
                <Cadali>Mochila</Cadali>
            </Cadalist>
        </Menu>
        <div className="Produtos">
            <Produtos/>
        </div>
    </div>
    }
  
}
