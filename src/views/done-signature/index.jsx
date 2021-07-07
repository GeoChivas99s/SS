import React from 'react';
import {SignatureHeader ,SignatureEmp ,Layout  ,ButtonGroup}  from  '../../components/index';

const DoneSignature = () => {
    return (
      <Layout pageTitle='Completar Assinatura'>
        <SignatureHeader />
        <SignatureEmp display='none'/>
        <ButtonGroup/>
   </Layout>
    );
        
      
}

export default DoneSignature;
