import React from "react";
import styled from "styled-components";
import AreaHeader from "../header/style";
import * as Icon from "react-icons/fa";
import * as Icons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Principal, Corpo } from "../landing-body/style";

const Signature = (props) => {
  const [mostraM, alterar] = useState(false);
  const logo = props.logo;

  const [colorChange, setColorchange] = useState("none");
  const [, setLogo] = useState("none");

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange("gray");
      setLogo("flex");
    } else {
      setColorchange("none");
      setLogo("none");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const mostraMenu = () => {
    alterar(!mostraM);
  };

  return (
    <>
      <Navbar color={colorChange}>
        <div>
          <div className="logo" style={{ display: logo }}>
            <Link to="/">
              <img src="../../../LogoIvert1.png" alt="" />
            </Link>
          </div>

          <i onClick={mostraMenu}>
            <Icon.FaBars />
          </i>

          <nav className="Category">
            <li>
              <Link to="/"> Categorias </Link>
            </li>
            <li>Informações</li>
          </nav>
          <div className="buttonSearch">
            <li>Pesquisar</li>

            <Link to="/login" className="button">
              Aceder a conta
            </Link>
          </div>
        </div>

        <nav className={mostraM ? "menu active" : "menu"}>
          <i onClick={mostraMenu}>
            <Icons.AiOutlineClose />{" "}
          </i>
          <li>
            <Link to="/Categorias"> Categorias </Link>
          </li>
          <li>Procedimentos</li>
          <li>Clientes</li>
        </nav>
      </Navbar>

      <View>
        <div className="Text">
          <h1 className="EuSou">Eu sou:</h1>

          <div className="type">
            <h1>Desenvolvedor | Empreendedor</h1>
          </div>
        </div>

        <Overlay></Overlay>
      </View>
    </>
  );
};

export default Signature;

const View = styled(Principal)`
  height: 50vh;
  font-size: 11px;

  .Text {
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .EuSou {
      padding: 100px;
    }
    .type {
      background: rgba(255, 255, 255, 0.3);
      h1 {
        padding: 50px;
      }
    }
  }
`;

const Overlay = styled(Corpo)`
  height: 50vh;
`;

const Navbar = styled(AreaHeader)`
  .button {
    margin-top: 10px;
    align-items: center;
    display: flex;
    text-decoration: none;
    color: #971d37;
    background: #ffffff;
    padding: 5px;
    width: 130px;
    justify-content: center;
    border-radius: 5px;
    margin-right: 40px;
  }

  li {
    list-style: none;
  }

  .buttonSearch {
    display: flex;

    width: 300px;
  }
  .Category {
    display: flex;
    margin-left: -300px;
  }
  height: 70px;
`;
