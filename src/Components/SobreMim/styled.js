import styled from 'styled-components';
import Carousel from 'nuka-carousel'

export const Container = styled.section`
width:100%;
height:100vh;
display:flex;
align-items:center;
flex-direction: column;
justify-content: space-evenly;
background-color:black;
color:white;
`
export const Div = styled.div`
border:solid;
border-radius:10px;
width:40%;
height:80%;
display:flex;
align-items:center;
box-shadow: 10px 5px 5px gray;
img{
    width:45%;
    height:100%;
    object-fit: contain;
}
p{
    width:60%;
    position:relative;
    left:-3%;
}
@media(max-width:953px){
    width:80%; 
    height:60%;
    
     p{
    font-size:0.8rem;
    height:40%;
 }  
}
@media(max-width:840px){
 img{
    object-fit: cover;
    }   
    p{
        left:-1%;
    }
}
@media(max-width:620px){
    height:50%;  
}
@media(max-width:620px){
    p{
       height:80%;
    }
}
@media(max-width:530px){
    p{
       font-size:0.6rem;
    }
}
`
export const Footer = styled.footer`
display:flex;
width:50%;
justify-content: space-evenly;
align-items: center;
@media(max-width:580px){
    width:80%;  
}
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
export const SCarousel  =styled(Carousel)`
height:70%;
img{
  width:60px;
  height:60px;
}
@media(max-width:430px){
    img{
        width:45px;
        height:45px;
      } 
}
`
export const Box = styled.main`
display:flex;
align-items:center;
justify-content: space-evenly;
width:100%;
height:50%;
@media(max-width:953px){
    flex-direction: column;
    height:60%;
    justify-content: space-around;
}
`
export const Skills = styled.section`
width:40%;
height:45%;
text-align:center;
@media(max-width:953px){
   height:20%;
}
@media(max-width:442px){
 h2{
    font-size:0.9rem;
  }   
}

`