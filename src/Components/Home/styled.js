import styled from 'styled-components';
import {Link} from 'react-router-dom'
// export const = styled.``
export const Body = styled.body`
background-color:black;
color:white;
width:100vw;
height:100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
justify-content: space-around;
font-family: Arial, Helvetica, sans-serif;
`
export const Header = styled.header`
text-align:center;
`
export const Main = styled.main`
display:flex;
width:100%;
justify-content: space-evenly;
`
export const Option = styled.figure`
width:200px;
height:200px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

img{
    width:150px;
    height:150px;
    border-radius:50%;
    object-fit: cover; 
    cursor:pointer;
}
`
export const SLink = styled(Link)`
text-decoration:none;
`
export const Footer = styled.footer`
display:flex;
width:50%;
justify-content: space-evenly;
align-items: center;
`
export const Redes = styled.figure`
width:60%;
display:flex;
align-items: center;
justify-content: space-evenly;
img{
    width:30px;
    height:30px;
    border-radius:15%;
    cursor:pointer;
    background-color:white;
    object-fit: cover; 
}
`
