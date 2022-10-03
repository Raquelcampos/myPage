import React from 'react'
import horta from '../Files/horta.png'
import luz from '../Files/luz.png'
import leitura from '../Files/leitura.png'
import * as S from './styled.js';
import { Link } from 'react-router-dom';
export default function Onu(){

    return(
        <>
        <h1>PROJETOS SOCIAIS</h1>
        <Link to="/"><p>home</p></Link>
        <S.Horta>
            <figure>
                <S.Text>
                   <h1>1</h1>
                   <h3>HORTA COMUNITÁRIA</h3>  
                </S.Text>
               
             <img src={horta} alt="horta" />   
            </figure>    
        </S.Horta>
        <S.Luz>
        <figure>
        <S.Text>
           <h1>2</h1>
            <h3>ILUMINAÇÃO URBANA</h3>      
        </S.Text>   
             <img src={luz} alt="luz" />   
            </figure>  
        </S.Luz>
        <S.Leitura>
        <figure>
            <S.Text>
            <h1>3</h1>
            <h3>LEITURA VOLUNTÁRIA</h3>
            </S.Text>  
             <img src={leitura} alt="leitura" />   
            </figure>
        </S.Leitura>
        </>
    )
}