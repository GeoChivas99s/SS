import React from "react";

import styled from "styled-components";


export const ProductStatusListItem = (props) => (
  <a href={props.link}>
    <ProductContainer days={props.days}>
      <ProductIntro>
        <div>
          <img src={props.img} alt="LOGO" />
        </div>
        <p>Nome do produto</p>
      </ProductIntro>
      <ProductSpecs>
        <div className="container">
          <div>
            <div className="regular-info">
              <span>{props.name}</span>
              <span>SuperSoft</span>
              <span>Reconhecedor de caracteres opticos</span>
            </div>
          </div>
          <div className="status-line"></div>
        </div>
      </ProductSpecs>
      <div className="remaining">
        ∆<span>Extender subscrição</span>
        <b>{props.days} dias restantes!</b>
      </div>
    </ProductContainer>
  </a>
);

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.7rem;

  .remaining {
    flex: 1;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) =>
      props.days >= 30
        ? "#eaffda"
        : props.days >= 10
        ? "#ffe8ad"
        : props.days >= 5
        ? "#ffb4b4"
        : ""};
    background-position: relative;
  }

  .remaining b {
    color: ${(props) =>
      props.days >= 30
        ? "#346011"
        : props.days >= 10
        ? "#795700"
        : props.days >= 5
        ? "#601111"
        : ""};
  }

  .remaining span {
    position: absolute;
    top: 2rem;
    opacity: 0.3;
  }
`;

export const ProductIntro = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.7rem;
    margin-top: -1rem;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000049;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 0.7rem;
  }
`;

export const ProductSpecs = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  padding-top: 80px;

  .regular-info {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .status-line {
    width: 90%;
    margin: auto;
    height: 2px;

    background-color: ${(props) =>
      props.days >= 30
        ? "#346011"
        : props.days >= 10
        ? "#795700"
        : props.days >= 5
        ? "#601111"
        : ""};
    margin-top: 1.5rem;
  }
`;

export default ProductStatusListItem;
