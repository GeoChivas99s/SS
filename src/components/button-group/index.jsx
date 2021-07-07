import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const ButtonGroup = () => {
    return (
        <Box>
            <h3>Qual subscrição irá assinar?</h3>
            <div>
          <Btn1>Assinar</Btn1> 

          <Btn2 to="/TerminarAssinatura">Assinar</Btn2>
</div>
            
        </Box>
    );
}

export default ButtonGroup;


const  Box = styled.div`

display:flex;

justify-content:space-around;

div{
    display:flex;
    padding:10px;
  width:400px;
justify-content:space-between;
  
}

`;

const Btn1 = styled(Link)`
    
    padding:8px;
    text-decoration:none;
    background: #FFFFFF;
    border: 2px solid #971D37  ;
    border-radius: 15px;
    width:130px;
    color:#971D37;
    text-align:center;
    margin-left:20px;
    


   :hover{
  
    
    transform: scale(1.1);
   }

`;
const Btn2 = styled(Link)`
    
    padding:8px;
    text-decoration:none;
    background: #971D37;
    border: 2px solid #971D37  ;
    border-radius: 15px;
    width:130px;
    color:#FFFFFF;
    text-align:center;



   :hover{
    
    
    transform: scale(1.1);
   }


`;