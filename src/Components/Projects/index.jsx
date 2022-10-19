import React from 'react'
import * as S from './styled.js';
import { Link } from 'react-router-dom';
import star from '../Files/star.png'
import LOL from '../Files/LOL.png'
import fin from '../Files/fin.png'
import crespos from '../Files/crespos.png'
import calculadora from '../Files/calculadora.png'
import cep from '../Files/cep.jpeg'
import todo from '../Files/todo.jpeg'
import receita from '../Files/receita.png'
import hp from '../Files/hp.jpeg'

export default function Projects(){


    return(
        <S.Div>
         <p> Voltar para a <Link to="/">Home</Link></p>
        <S.Title>MEUS PROJETOS EM HTML, CSS, JAVASCRIPT E REACT</S.Title>
        <S.Container>
        
            <S.Card>
                <img src={star} alt="Star Wars"/>
                <S.Box>
                    <a href="https://raquelcampos.github.io/StarWars/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/StarWars" target="_blank" rel="noreferrer">CODE</a> 
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={LOL} alt="LOL" />
                <S.Box>
                    <a href="https://raquelcampos.github.io/desafioLOL/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/desafioLOL" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={crespos} alt="crespos" />
                <S.Box>
                    <a href="https://raquelcampos.github.io/Crespos/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/Crespos" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={fin} alt="fin" />
                <S.Box>
                    <a href="https://raquelcampos.github.io/fin/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/fin" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={calculadora} alt="calculadora" />
                <S.Box>
                    <a href="https://raquelcampos.github.io/calculadora/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/calculadora" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={cep} alt="buscador de endereço" />
                <S.Box>
                    <a href="https://raquelcampos.github.io/cep/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/cep" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={todo} alt="lista de tarefas" />
                <S.Box>
                    <a href="https://raquelcampos.github.io/toDoList/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/toDoList" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={receita} alt="Receitas" />
                <S.Box>
                    <a href="https://raquelcampos.github.io/receita/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/receita" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
            <S.Card>
                <img src={hp} alt="Harry Potter" />
                <S.Box>
                    <a href="https://majestic-phoenix-cc3b46.netlify.app/" target="_blank" rel="noreferrer">PAGE</a>
                    <a href="https://github.com/Raquelcampos/HarryPotter" target="_blank" rel="noreferrer">CODE</a>
                </S.Box>
            </S.Card>
        </S.Container>
        </S.Div>
    )
}