import styled from 'styled-components';

export const Container = styled.div`
background-color:black;
color:white;
`
export const Text = styled.section`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
font-family: Arial, Helvetica, sans-serif;
h1{
    font-size:2rem;
    margin:3% 0 3% 0;
}
p{
    width:90%;
    font-size:1.5rem;
    text-indent: 1.5em;
    margin-bottom: 2%;
    text-align: justify;
}
`
export const Div= styled.div`
width:80%;
margin:0 auto;
display:flex;
justify-content: space-evenly;
flex-direction:column;
align-items: center;
`
export const Horta = styled.button`
background-color:green;
border:none;
width:100%;
height:100%;
img{
    background-color:green;  
}
section{
    background-color:green;  
}
h1{
    background-color:green; 
}
h3{
    background-color:green; 
}
`
export const Section = styled.section`
width:38%;
height:300px;
border-radius:15px;
overflow: hidden;
margin-bottom:5%;
img{
    width:90%;
    height:200px;
    margin-bottom:0;
}
&:hover{
    width:100%;
    height:70vh;
 button{
    display:none;
} 
div{
    display:flex; 
} 
}
 div{
    display:none; 
}  
`
export const Div2 = styled.div`
    width:100%;
    height:100%;
    border:solid;
    align-items:center;
    border-radius:15px;
    img{
        width:30%;
        height:40%;
    }
`
export const Luz = styled.button`
background-color:yellow;
border:none;
width:100%;
height:100%;
img{
    background-color:yellow;  
}
section{
    background-color:yellow;  
}
h1{
    background-color:yellow; 
}
h3{
    background-color:yellow; 
}
`
export const Leitura = styled.button`
background-color: pink;
border:none;
width:100%;
height:100%;
img{
    background-color:pink;  
}
section{
    background-color:pink;  
}
h1{
    background-color:pink; 
}
h3{
    background-color:pink; 
}
}
`
export const Doacao = styled.button`
background-color: blueviolet;
border:none;
width:100%;
height:100%;
img{
    background-color:blueviolet;  
}
section{
    background-color:blueviolet;  
}
h1{
    background-color:blueviolet; 
}
h3{
    background-color:blueviolet; 
}
`
export const Oleo = styled.button`
background-color: orange;
border:none;
width:100%;
height:100%;
img{
    background-color:orange;  
}
section{
    background-color:orange;  
}
h1{
    background-color:orange; 
}
h3{
    background-color:orange; 
}
}
`
export const Text2 = styled.section`
display:flex;
width:100%;
align-items:center;
justify-content:center;
color:black;
h1{
    font-size:2rem;
    color:black;
}
h3{
    color:black;
}

`
export const Text3 = styled.section`
width:60%;
height:60%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-left:3%;
p{
    width:90%;
    font-size:1.5rem;
}
h1{
    font-size:2rem;
}
@media(max-width:540px){
    p{
        font-size:1rem;
    }
    h1{
        font-size:1.5rem;
    }
}

`
export const HortaImg = styled.img`
background-color:green;
border-radius:15px;
`
export const LeituraImg = styled.img`
background-color:pink;
border-radius:15px;
`
export const LuzImg = styled.img`
background-color:yellow;
border-radius:15px;
`
export const DoacaoImg = styled.img`
background-color:blueviolet;
border-radius:15px;
`
export const OleoImg = styled.img`
background-color:orange;
border-radius:15px;
`

