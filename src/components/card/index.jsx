import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <Cartoon> 
           <div className="mom">
                 <div className="imagem">
                 <img src={props.img} alt="" />
             </div>
           </div>
           
            <div>
                <h4>{props.author}</h4>
                <h3>{props.discription}</h3>
            </div>
        </Cartoon>
    );
}

export default Card;

const Cartoon = styled.div`

display:flex;
width:300px;
height:300px;
border:solid;
flex-direction: column;
.mom{

width:inherit;
background:#FFFF;
display:flex;
align-items:center;
justify-content: center;
}
.imagem{
 width:100px;

    img{
        width:100%;
    }


}

`;