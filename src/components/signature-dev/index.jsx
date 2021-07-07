import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-icons/fa';



const SignatureDev = () => {



    
    return (
        <Main>

 <h1>Desenvolvedor</h1>
           
 <table >
    <tr>
        <th></th>
        <th>Normal</th>
        <th>Super Colaborador</th>
    </tr>

    <tr>
        <td className="ultima"> Monetização </td>
        <td> <h4> <Icon.FaCheck/></h4> </td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td className="ultima">Divulgação</td>
        <td><h4> <Icon.FaCheck/></h4></td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td className="ultima">Sugestões de Apps</td>
        <td> <p>  <Icon.FaWindowMinimize/></p>   </td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td className="ultima">Disponibilidade do Serviço</td>
        <td> <p>24/7 </p> </td>
        <td ><p>24/7 </p></td>
    </tr>
</table>

        </Main>
    );
}

export default SignatureDev;
const Main = styled.section`
  width:100%;
 
  display:flex;
  flex-direction:column;
 height:400px;
 justify-content: space-around;


 margin-bottom: 40px;

.ultima{
    border-bottom:none;
}
 
 h1{
     padding:50px;
     color:#890043;
     margin-left:100px;
 }
 table{
     .ultima{
         text-align:start;
         border-bottom: 4px solid #E6E6E6;
     }
    text-align:center;
     width:80%;
    padding:20px;
    flex:1;
    align-self:center;
td{
    border-bottom: 4px solid #E6E6E6;
  
}

p{
    color:#890043;
}
h4{
    color: #EEBA00;

}
 }

`
;