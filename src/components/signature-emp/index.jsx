import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-icons/fa';
import {Link } from 'react-router-dom';


const SignatureEmp = () => {
    return (
        <Main>

 <h1>Empreendedor</h1>
           
 <table >
    <tr>
        <th></th>
        <th>Gratuito</th>
        <th>Premium</th>
    </tr>


    <tr>
        <td>Suporte Técnico</td>
        <td><h4> <Icon.FaCheck/></h4></td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td>Divulgação</td>
        <td><h4> <Icon.FaCheck/></h4></td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td>Acesso a aplicações grátis </td>
        <td> <h4> <Icon.FaCheck/> </h4>   </td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td>Acesso a aplicações pagas</td>
        <td>  <p>  <Icon.FaWindowMinimize/> </p></td>
        <td> <h4> <Icon.FaCheck/></h4></td>
    </tr>

    <tr>
        <td>Direcções estratégicas</td>
        <td>  <p>  <Icon.FaWindowMinimize/></p> </td>
        <td><h4> <Icon.FaCheck/> </h4> </td>
    </tr>

   
    <tr className="ultima">
        <td>Preços</td>
        <td>  <p>  Grátis</p></td>
        <td><p> 20,000.00 kz / Mês </p></td>
    </tr>
    <tr >
        <td className="ultima"></td>
        <td className="ultima"> </td>
        <td className="ultima"> <Link>Assinar</Link></td>
    </tr>
</table>

        </Main>
    );
}

export default SignatureEmp;
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
 a{
    
    padding:8px;
    text-decoration:none;
    background: #FFFFFF;
    border: 2px solid #971D37;
   border-radius: 15px;
   width:130px;
   margin-top:16px;
   position:absolute;
   color:#971D37;
   text-align:center;
   right:150px;
   :hover{
    background: #890043;
    color:  #FFFFFF;
    
    transform: scale(1.1);
   }


 }
 
 h1{
     padding:50px;
     color:#890043;
     margin-left:100px;
 }
 table{
     width:80%;
    padding:20px;
    flex:1;
    align-self:center;
td{
    border-bottom:0.5px solid;
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