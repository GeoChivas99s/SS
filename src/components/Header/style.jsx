import  styled from 'styled-components';




const AreaHeader = styled.header`

width:100%;
height:50px;
display:flex;
position:fixed;
align-items:center;
color:white;
z-index:4;

flex-direction:column;
transition: 450ms;

a{
text-decoration:none;
color:white;


}
.logo{


    position:absolute;
    top:5px;
    left:30px;
    width:70px;
    img{
        width:100%;
    }
}
.menu{

background-color:black;
position:absolute;
left:-120vh;
height:100vh;
width:50%;
transition : 700ms;

z-index:4;
display:flex;
flex-direction:column;
i{

    display:flex;
    align-self:flex-end;
    margin-right:20px;
    font-size:3rem;
cursor:pointer;
}
li{
    font-size:1.2rem;
    margin-top:30px;
    list-style:none;
    margin-left:5px;


}

}

.menu.active{
    left:0;
 transition : 700ms;
}



div{

i{
    display:none;
    transition: 450ms;
}

    display:flex;

width:60%;
justify-content:space-between;
align-self:flex-end;
height:40px;
align-items:center;
margin-top:10px;
transition: 450ms;

@media(max-width: 900px){
transition: 450ms;
width:75%;
}

@media(max-width: 700px){
transition: 450ms;
width:100%;

i{
    display:flex;
    margin-left:30px;
    font-size:2rem;
}
.logo{

    display:none;
}

}

nav{

    transition: 450ms;
    @media(max-width: 700px){
display:none;

}

    display:flex;
    list-style-type:none;
margin-top:10px;

     li{
         padding:15px;
         flex-wrap: nowrap;
     }


}

.Login{
    margin-top:10px;
    align-items:center;
    display:flex;
    text-decoration:none;
    color:#971D37;
    background:#FFFFFF;
    padding:5px;
    width:100px;
    justify-content:center;
    border-radius:5px;
    margin-right:40px;

    
}
}
`;

export default AreaHeader;