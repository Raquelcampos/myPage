import React from 'react'
import projetos from '../Files/projetos.jpeg'
import computador from '../Files/computador.jpeg'
import instagram from '../Files/instagram.png'
import linkedin from '../Files/linkedin.png'
import github from '../Files/github.png'
import eu from '../Files/eu.jpg'
import * as S from './styled.js';

export default function Home(){

    return(
        <S.Body>
        <S.Header>
           <h1>Bem-Vindo ao meu website!</h1> 
           <h2>Eu sou a Raquel</h2>
        </S.Header>
        <S.Main>
        <S.Option>
            <img src={eu} alt="Raquel" />
            <h3>Sobre Mim</h3>
        </S.Option>
        
        <S.Option>
            <S.SLink to="/Projects">
                <img src={computador} alt="computador" />
                <h3>Portifólio</h3>
            </S.SLink>
        </S.Option>  
        
        <S.Option>
         <S.SLink to="/Onu">
            <img src={projetos} alt="projetos" />
            <h3>Projetos Sociais</h3>
         </S.SLink> 
        </S.Option>
        </S.Main>
        <S.Footer>
            <h3>Minhas redes</h3>
            <S.Redes>
                <a href="https://www.instagram.com/raquelcampos1545/" target="_blank"><img src={instagram} alt="instagram" /> </a>
                <a href="https://www.linkedin.com/in/raquel-campos-10054b205/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/Raquelcampos" target="_blank"><img src={github} alt="github" /></a>
                
            </S.Redes>
        </S.Footer>
        </S.Body>
    )
}