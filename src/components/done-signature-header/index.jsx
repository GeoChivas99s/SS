import React from 'react';
import {Header} from '../index';
import {Principal , Corpo} from '../landing-body/style';
import styled from 'styled-components';
const SignatureHeader = (props) => {
    const teste = props.display;
    return (
           <>
       <Header/>
       <Main>
        <h1 >
            Empreendendor
        </h1>
       <Overlay></Overlay>

       </Main>
       
         </>
      
    );
}

export default SignatureHeader;



const Main = styled(Principal)`
height:30vh;
h1{

    z-index:4;
    position:absolute;
    left:0;
    margin:100px 0 0 130px; 

}
`;

const Overlay = styled(Corpo)`
height:30vh

`;