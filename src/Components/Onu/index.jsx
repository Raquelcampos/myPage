import React from 'react'
import horta from '../Files/horta.png'
import luz from '../Files/luz.png'
import leitura from '../Files/leitura.png'
import doacao from '../Files/doacao.png'
import oleo from '../Files/oleo.png'
import * as S from './styled.js';
import { Link } from 'react-router-dom';
export default function Onu(){

    return(
        <S.Container>
         <h3> Voltar para a <Link to="/">Home</Link></h3>
        <S.Text>
            <h1>PROJETOS SOCIAIS</h1>
            <p>Projetos sociais são um conjunto de ideias e ações que tem como objetivo melhorar um ou mais aspectos da sociedade, esses projetos podem ser desenvolvidos individualmente ou em grupo, mas para serem postos em prática 
                necessitam do apoio da comunidade e de seus governantes.</p>
            <p>
                 A seguir estão listados 
                alguns projetos que pensei para melhorar meu bairro, esses projetos visam melhorar certos aspectos como segurança e educação de forma simples e prática. 
  
            </p>    

        </S.Text>
        
        <S.Div>
            <S.Section>
                <S.Horta>
                    <S.Text2>
                    <h1>1</h1>
                    <h3>HORTA COMUNITÁRIA</h3>  
                    </S.Text2>
                    <img src={horta} alt="horta" />   
                </S.Horta>
                <S.Div2>
                    <S.Text3>
                        <h1>1-HORTA COMUNITÁRIA</h1>
                        <p> Realizar uma horta com em um espaço publico onde todos terão acesso as frutas e hortaliças cultivadas e poderão consumi-las. Esse projeto tem por objetivo melhorar a alimentação da população e proporcionar alimentos aqueles que não tem condições financeiras de adquirir. </p>
                    </S.Text3>
                    <S.HortaImg src={horta} alt="horta" /> 
                </S.Div2>  
            </S.Section>   
        
        <S.Section> 
            <S.Leitura>
                <S.Text2>
                    <h1>2</h1>
                    <h3>LEITURA VOLUNTÁRIA</h3>
                </S.Text2>  
                <img src={leitura} alt="leitura" />   
            </S.Leitura>
            <S.Div2>
                <S.Text3>
                    <h1>2-LEITURA VOLUNTÁRIA</h1>
                    <p> Fazer a Leitura de um livro por semana na escola primária, ao fim da leitura propor um diálogo com as crianças sobre o tema do livro. Esse projeto tem o intuito de despertar o interesse das crianças pela literatura.</p>
                </S.Text3>
                <S.LeituraImg src={leitura} alt="leitura" />
            </S.Div2>
        </S.Section>
       
       <S.Section> 
         <S.Luz>
            <S.Text2>
                <h1>3</h1>
                <h3>ILUMINAÇÃO URBANA</h3> 
                 
            </S.Text2>   
            <img src={luz} alt="luz" />   
         </S.Luz>
         <S.Div2>
            <S.Text3>
                <h1>3-ILUMINAÇÃO URBANA</h1>
                <p>Levar á prefeitura as queixas a respeito dos postes que precisam de lâmpadas novas para melhorar a iluminação das ruas. Esse projeto tem como objetivo tornar o bairro mais iluminado e consequentemente mais seguro.</p>
            </S.Text3>
            <S.LuzImg src={luz} alt="luz" /> 
         </S.Div2>
       </S.Section>
        
        <S.Section>
            <S.Doacao>
                <S.Text2>
                    <h1>4</h1>
                    <h3>DOAÇÃO DE LIVROS</h3>
                </S.Text2>  
                <img src={doacao} alt="Doação" />
            </S.Doacao>
            <S.Div2>
                <S.Text3>
                    <h1>4-DOAÇÃO DE LIVROS</h1>
                    <p> Levar á prefeitura as queixas a respeito dos postes que precisam de lâmpadas novas para melhorar a iluminação das ruas. Esse projeto tem como objetivo tornar o bairro mais iluminado e consequentemente mais seguro.</p>
                </S.Text3>
                <S.DoacaoImg src={doacao} alt="Doação" />
            </S.Div2>
        </S.Section>
        <S.Section>
            <S.Oleo>
                <S.Text2>
                    <h1>5</h1>
                    <h3>DESCARTE DE ÓLEO USADO</h3>
                </S.Text2>  
                <img src={oleo} alt="Óleo" />
            </S.Oleo>
            <S.Div2>
                <S.Text3>
                    <h1>5-DESCARTE DE ÓLEO USADO</h1>
                    <p>Estabelecer um ponto na comunidade onde os moradores possam descartar o óleo de cozinha usado e semanalmente uma empresa de limpeza fará o recolhimento. Fazendo isso diminuímos o volume de óleo que vai para os esgotos e consequentemente para o mar onde prejudica a vida marinha.</p>
                </S.Text3>
                <S.OleoImg src={oleo} alt="Óleo" />  
            </S.Div2>
        </S.Section> 
       
        </S.Div>
        </S.Container>
    )
}