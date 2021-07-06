import { React, useState } from "react";

import AreaHeader from "./style";
import * as Icon from "react-icons/fa";
import * as Icons from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = (props) => {
  const logo = props.logo; const mostra = props.login;
 /*

  const color = props.color;
  const altura = props.altura;
  backgroundColor: color, height: altura
  */
  const [mostraM, alterar] = useState(false);

  const mostraMenu = () => {
    alterar(!mostraM);
  };

  return (

    <AreaHeader {...props}>
      <div>
        <div className="logo" style={{ display: logo }}>
          <Link to="/">
            <img src="../../../LogoIvert1.png" alt="" />
          </Link>
        </div>

        <i onClick={mostraMenu}>
          <Icon.FaBars />
        </i>

        <nav>
          <li>
            {" "}
            <Link to="/"> Quem Somos </Link>
          </li>
          <li>Procedimentos</li>
          <li>Clientes</li>
        </nav>

        {mostra === true ? (
          <Link to="/Login" className="Login">
            {" "}
            Fazer Login{" "}
          </Link>
        ) : (
          <></>
        )}
      </div>

      <nav className={mostraM ? "menu active" : "menu"}>
        <i onClick={mostraMenu}>
          {" "}
          <Icons.AiOutlineClose />{" "}
        </i>
        <li>
          <Link to="/AboutUs"> Quem Somos </Link>
        </li>
        <li>Procedimentos</li>
        <li>Clientes</li>
      </nav>
    </AreaHeader>
  );
};

export default Header;
