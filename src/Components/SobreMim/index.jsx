import React from 'react'
import * as S from './styled.js';
import raquel from '../Files/raquel.png'
import { Link } from 'react-router-dom';
import instagram from '../Files/instagram.png'
import linkedin from '../Files/linkedin.png'
import github from '../Files/github.png'
import html from '../Files/html.png'
import css from '../Files/css.png'
import js from '../Files/js.png'
import logo from '../Files/logo.png'
import office from '../Files/office.png'

export default function SobreMim(){

    return(
        <S.Container>
        <h3>Voltar para a <Link to="/">HOME</Link></h3>
    <S.Box>
        <S.Div>
            <img src={raquel} alt="Raquel Campos" />
            <p>Eu sou a Raquel, tenho 22 anos, sou desenvolvedora front-end, sou carioca e estou cursando  Física na UERJ. Eu amo programação e matematica e acho que as duas sao parecidas afinal a lógica é a base que ambas tem em comum! Eu gosto de estar sempre aprendendo e me renovando, estou sempre buscando cursos e me envolvendo em projetos que apoiam causas em que eu acredito e defendo como por exemplo o grupo das TechGirls que visa uma maior participação feminina em areas da tecnologia .    </p>
            
        </S.Div>
        <S.Skills>
         <h2>Minhas Skills</h2>  
       
        <S.SCarousel
        autoplay='true'
        slidesToShow='3'
        withoutControls='true'
        wrapAround='true'
        >
           
           <img src={html} alt="logo html" /> 
           <img src={css} alt="logo css" />
           <img src={js} alt="js" />
           <img src={logo} alt="logo react" />
           <img src={office} alt="pacote office" />
        </S.SCarousel>
        </S.Skills>
    </S.Box>
        <S.Footer>
            <h3>Minhas redes</h3>
            <S.Redes>
                <a href="https://www.instagram.com/raquelcampos1545/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /> </a>
                <a href="https://www.linkedin.com/in/raquel-campos-10054b205/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/Raquelcampos" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                
            </S.Redes>
        </S.Footer>
        </S.Container>
    )
}