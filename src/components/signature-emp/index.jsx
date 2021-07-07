import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-icons/fa';



const SignatureEmp = (props) => {
    const mostra = props.display;
    return (
        <Main>

 <H1 {...props}>Empreendedor</H1>
           
 <table >
    <tr>
        <th></th>
        <th>Gratuito</th>
        <th>Premium</th>
    </tr>


    <tr>
        <td className="primeiro">Suporte Técnico</td>
        <td><h4> <Icon.FaCheck/></h4></td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td className="primeiro">Divulgação</td>
        <td><h4> <Icon.FaCheck/></h4></td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td className="primeiro">Acesso a aplicações grátis </td>
        <td> <h4> <Icon.FaCheck/> </h4>   </td>
        <td><h4> <Icon.FaCheck/></h4></td>
    </tr>
    <tr>
        <td className="primeiro">Acesso a aplicações pagas</td>
        <td>  <p>  <Icon.FaWindowMinimize/> </p></td>
        <td> <h4> <Icon.FaCheck/></h4></td>
    </tr>

    <tr>
        <td className="primeiro"> Direcções estratégicas</td>
        <td>  <p>  <Icon.FaWindowMinimize/></p> </td>
        <td><h4> <Icon.FaCheck/> </h4> </td>
    </tr>

   
    <tr className="ultima">
        <td className="primeiro"> Preços</td>
        <td>  <p>  Grátis</p></td>
        <td><p> 20,000.00 kz / Mês </p></td>
    </tr>
   
</table>


        </Main>
    );
}

export default SignatureEmp;


const H1 = styled.h1`

     display :  ${(props)=> props.display};
     padding:50px;
     color:#890043;
     margin-left:100px;
 
`;


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

 
 
 table{

    .primeiro{
        text-align:start;
    }
     width:80%;
    padding:20px;
    flex:1;
    align-self:center;
    text-align:center;
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
`;