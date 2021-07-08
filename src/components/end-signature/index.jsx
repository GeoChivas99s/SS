import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export default function EndSignature() {
  return (
    <Main>
    
      <table>
        <tr>
          <th>Mensal</th>
          <th>Trimestral</th>
          <th>Anual</th>
        </tr>
        <tr>
          <td>20,000.00AKZ</td>
          <td>60,000.00AKZ</td>
          <td>240,000.00AKZ</td>
        </tr>
        <tr>
          <td>15,700.00AKZ <br/> No primeiro mês </td>
          <td>45,700.00AKZ <br/> No primeiro trimestre</td>
          <td>180,700.00AKZ <br/> No primeiro ano</td>
        </tr>
        <tr>
          <td><input type="radio" /> </td>
          <td><input type="radio" /> </td>
          <td><input type="radio" /> </td>
       
        </tr>
      </table>

     <Button to="/Mercado">
         Assinar
     </Button>
    </Main>
  );
}
const Main= styled.main`
display:flex;

align-items:center;
justify-content:center;
padding:20px;
flex-direction: column;
table{
    text-align:center;
    flex:1;
     padding:40px;
     width:80%;
    tr > th{
    border-bottom: 4px solid #E6E6E6;
    padding:10px;
    }
    td{
        padding:10px;
    }
}

`;




const Button = styled(Link)`
 width:80%;

 background:#890043;
 text-align:center;
 padding:10px;
 border-radius:10px;
 color: #FFFF;
 text-decoration:none;
 


`;