import styled from 'styled-components';
import {Link} from 'react-router-dom';

import React from 'react';
const Btn = styled(Link)`

    
    padding:8px;
    text-decoration:none;
    background: #FFFFFF;
    border: 2px solid #971D37  ;
    border-radius: 15px;
    width:130px;
    margin-top:-30px;
    position:absolute;
    color:#971D37;
    text-align:center;
    right:150px;


   :hover{
    background: #890043;
    color:  #FFFFFF;
    
    transform: scale(1.1);
   }





`;
const Button = (props) => {
    return (
        <Btn to={props.path}>
            {props.text}
        </Btn>
    );
}

export default Button;


