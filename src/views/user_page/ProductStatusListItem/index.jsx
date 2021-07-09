import React from "react";

import styled from 'styled-components';

export const ProductStatusListItem = () => (

      <ProductContainer>
        <ProductIntro>
          <div>
            <img src="./../../market-view/1.png" alt="LOGO" />
          </div>
          <p>Nome do produto</p>
        </ProductIntro>
        <ProductSpecs>
          <div className="container">
            <div>
              <div className="regular-info">
                <span>Informação</span>
                <span>Informação</span>
                <span>Informação</span>
              </div>
            </div>
            <div className="status-line"></div>
          </div>
        </ProductSpecs>
        <div className="remaining">
          <span>Extender subscrição</span>
          <b>8 dias restantes!</b>
        </div>
      </ProductContainer>
);

export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 0.7rem;

    .remaining{
    flex: 1;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EAFFDA;
    position: relative;
    }

    .remaining b{
        color: #346011;
    }

    .remaining span{
        position: absolute;
        top: 2rem;
        opacity: .3;
    }
`

export const ProductIntro = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    div{
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.7rem;
        margin-top: -1rem;
        border-radius: 10px;
        border: 1px solid red;

    }

    img{
        width: 100%;
    }

    p{
        font-size: 0.7rem;
    }
`

export const ProductSpecs = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    padding-top: 80px;

    .regular-info{
        flex: 1;
        display: flex;
        justify-content: space-around;
    }

    .status-line{
        width: 90%;
        margin: auto;
        height: 2px;
        background-color: green;
        margin-top: 1.5rem;
    }
`



export default ProductStatusListItem;