import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <Cartoon {...props}> 
           <div className="mom">
                 <div className="imagem">
                 <img src={props.img} alt="" />
             </div>
           </div>
           
            <div className="text">
                <h4>{props.author}</h4>
                <p>{props.discription}</p>
            </div>
        </Cartoon>
    );
}

export default Card;

const Cartoon = styled.div`

display:flex;
width:250px;
height:250px;
box-shadow: ${props => props.lado ? "0" : "1px 1px 10px #00000075;"};
flex-direction: ${props => props.lado ? "row" : "column"};
border-radius: 15px;

.mom{
width:inherit;
background:#FFFF;
display:flex;
overflow: hidden;
border-radius: inherit;
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
align-items:center;
justify-content: center;


}
.imagem{
 width:100%;

    img{
        width:100%;
        box-shadow: ${props => props.lado ? "1px 1px 10px #00000075;" : "0"};
        border-radius: ${props => props.lado ? "20px" : "0"};
    }


}

.text{
    padding: 1rem;
    height: ${props => props.lado ? "150px" : ""};
    margin-top: ${props => props.lado ? "50px" : ""};



    h4{
        margin-bottom: 1rem;
    }
}

`;