import React from 'react';
import Button from '../../elements/button/index';
import {Signature ,SignatureDev ,SignatureEmp, Layout} from '../../components/index';

const SignatureView = () => {
    return (
        <Layout pageTitle='Assinaturas'>
        <Signature/>
        <SignatureDev/>
        <SignatureEmp/>
        <Button path='/CompletarAssinatura'  text='Assinar'/>
        </Layout>
    );
}

export default SignatureView;
