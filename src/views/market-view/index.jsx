import React from "react";
import { Card, MarketHeader, Layout } from "../../components/index";
import styled from "styled-components";

import imagem1 from './1.png';
import imagem2 from './2.png';
import imagem3 from './3.png';
import imagem4 from './4.png';
import imagem5 from './5.png';
import imagem6 from './6.png';
import imagem7 from './7.png';
import imagem8 from './8.png';
import imagem9 from './9.png';
import imagem10 from './10.png';
import imagem11 from './11.png';
import imagem12 from './12.png';
import imagem13 from './13.png';
import imagem14 from './14.png';
import imagem15 from './15.png';

const MarketView = () => {
  return (
    <Layout pageTitle="Mercado">
      <MarketHeader></MarketHeader>
      <ViewLayout>
   <div className="card">

 
          <Card
            img={imagem1}
            author="Geovane"
            discription="TEste"
          />
          <Card
           
            img={imagem2}
            author="Geovane"
            discription="TEste"
          />
          <Card
           
            img={imagem3}
            author="Geovane"
            discription="TEste"
          />
          <Card
           
            img={imagem5}
            author="Geovane"
            discription="TEste"
          />
         </div>

        <div className="textsTitle">
        <h2>Mais populares</h2>
        <span>Conheça as apps mais populares do seu interesse</span>
        </div>
        
        <div className="card">
        <Card
            lado="row"
            img={imagem4}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem6}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem7}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem8}
            author="Geovane"
            discription="TEste"
          />
        </div>

        <div className="textsTitle">
        <h2>Mais populares</h2>
        <span>Conheça as apps mais populares do seu interesse</span>
        </div>
        
        <div className="card">
        <Card
            lado="row"
            img={imagem9}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem10}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem11}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem12}
            author="Geovane"
            discription="TEste"
          />
        </div>

        <div className="textsTitle">
        <h2>Mais populares</h2>
        <span>Conheça as apps mais populares do seu interesse</span>
        </div>
        
        <div className="card">
        <Card
            lado="row"
            img={imagem13}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem14}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem14}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem15}
            author="Geovane"
            discription="TEste"
          />
        </div>

        <div className="textsTitle">
        <h2>Mais populares</h2>
        <span>Conheça as apps mais populares do seu interesse</span>
        </div>
        
        <div className="card">
        <Card
            lado="row"
            img={imagem1}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem1}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem1}
            author="Geovane"
            discription="TEste"
          />
          <Card
           lado="row"
            img={imagem1}
            author="Geovane"
            discription="TEste"
          />
        </div>
      </ViewLayout>
    </Layout>
  );
};

const ViewLayout = styled.div`
  width: 80%;
  margin: 50px auto;
  margin-top: -120px;
  z-index: 4;
  position: relative;
  .card{
      display:flex;
    width:100%;
     justify-content: space-between;

  }

  .textsTitle{
      height: 4rem;
      margin: 3rem 0 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
`;

export default MarketView;
