import styled from 'styled-components';


export const Div = styled.div`
display:flex;
height:100vh;
flex-direction:column;
align-items:center;
background-color:black;
color:white;
`
export const Title =styled.h2`
text-align:center;
margin: 3% 0 3% 0;
`
export const Container = styled.div`
display:flex;
align-items:center;
flex-wrap: wrap;
justify-content: space-evenly;
width:90%;
height:700px; 
`
export const Card = styled.section`
border:solid 1px;
border-radius:5px;
width:27%;
height:30%;
overflow: hidden;
img{
    width:100%;  
    height:70%; 
    object-fit: cover; 
}
`
export const Box = styled.div`
    width:100%;
    height:25%;  
    display:flex;
    justify-content: space-evenly;
    align-items: center;
a{
   text-decoration: none;  
   border:solid 1px;
   width:25%;
   text-align:center;
   cursor:pointer;
}    
@media(max-width:780px){
    a{
        width:45%;
        font-size:0.8rem
    }
}
`
