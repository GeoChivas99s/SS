import { React, useState } from "react";

import AreaHeader from "./style";

import * as Icon from "react-icons/fa";
import * as Icons from "react-icons/ai";
import { Link } from "react-router-dom";
import useUserContext from "../../hooks/use-user-context";

const Header = (props) => {
  const logo = props.logo;
  const mostra = props.login;

  const [mostraM, alterar] = useState(false);

  const { isLogged, data, setIsLogged, setData } = useUserContext;

  const mostraMenu = () => {
    alterar(!mostraM);
  };

  const logout = () => {
    setIsLogged(false);
    setData({});
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
            <Link to="/"> Quem Somos </Link>
          </li>
          <li>
            {" "}
            <Link to="/Assinatura">Assinaturas</Link>
          </li>
          <li>Clientes</li>
        </nav>

        {mostra === true &&
          (!isLogged ? (
            <Link to="/Login" className="Login">
              Fazer Login
            </Link>
          ) : (
            <>
              <p>{data?.name || "User account"}</p>
              <p onClick={logout}>Sair</p>
            </>
          ))}
      </div>

      <nav className={mostraM ? "menu active" : "menu"}>
        <i onClick={mostraMenu}>
          <Icons.AiOutlineClose />
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
