import React from 'react';
import styled from ''

const Card = (props) => {
    return (
        <Cartoon>
             <div>
                 <img src={props.img} alt="" />
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
width:200px;
border:solid;

`;