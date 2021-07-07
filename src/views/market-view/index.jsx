import React from 'react';
import {Card  ,MarketHeader ,Layout} from '../../components/index';
import imagem from './sukuna.jpg'
const MarketView = () => {
    return (
        <Layout>
            <MarketHeader></MarketHeader>
            <Card img= {imagem} author="Mingo" discription="jsjkjsdkjjsk" />
        </Layout>
    );
};




export default MarketView;
