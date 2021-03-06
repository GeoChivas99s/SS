import * as Icon from "react-icons/fa";
import * as Icons from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import useUserContext from "../../hooks/use-user-context";
import { Navbar, View, Overlay } from "./user-header.styles";

const UserHeader = (props) => {
  const [mostraM, alterar] = useState(false);
  const logo = props.logo;

  const [colorChange, setColorchange] = useState("none");

  const { isLogged, data, setIsLogged, setUserData } = useUserContext();

  const changeNavbarColor = () =>
    setColorchange(window.scrollY >= 80 ? "gray" : "none");

  window.addEventListener("scroll", changeNavbarColor);
  const mostraMenu = () => {
    alterar(!mostraM);
  };

  const logout = () => {
    setIsLogged(false);
    setUserData(null);
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

            {!isLogged ? (
              <Link to="/login" className="Login">
                Fazer Login
              </Link>
            ) : (
              <>
                <p>{data?.name || "User account"}</p>
                <p onClick={logout}>Sair</p>
              </>
            )}
          </div>
        </div>

        <nav className={mostraM ? "menu active" : "menu"}>
          <i onClick={mostraMenu}>
            <Icons.AiOutlineClose />
          </i>
          <li>
            <Link to="/Categorias"> Categorias </Link>
          </li>
          <li>Procedimentos</li>
          <li>Clientes</li>
        </nav>
      </Navbar>

      <View>
        <div className="texto">
          <h1>Todo negócio é único </h1>
          <h1>Procure o software que necessita </h1>
          <input type="text" placeholder="Pesquisar..." />
          <h1>Minha lista de aplicações</h1>
          <h2>Renove a sua subscrição para manter controle do seu negócio</h2>
          <div className="subs">
            <h1>
              Tudo | Paga | Grátis | Subscrições Activas | Expiradas | Quase
              Expiradas
            </h1>
          </div>
        </div>
        <Overlay />
      </View>
    </>
  );
};

export default UserHeader;
