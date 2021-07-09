import React, { useState, useContext } from "react";
import * as Icon from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import Reveal from "react-reveal";

import { signIn } from "../../api";
import userContext from "../../context/user";
import { Principal, Corpo, Form } from "./style";

const FormLogin = () => {
  const { push } = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);

  const { setIsLogged, setUserData } = useContext(userContext);

  const onLogin = (name, emailAddress) => {
    setIsLogged(true);
    setUserData({
      name,
      email: emailAddress,
    });
    push('/user');
  };

  const handleSubmit = () => signIn(email, password, onLogin);

  return (
    <Reveal>
      <Principal>
        <Form>
          <div>
            <img src="../../../LogoForm.png" alt="" />
          </div>
          <h1>Entrar</h1>
          <input
            type="Email"
            required
            placeholder="Email"
            onClick={handleSetEmail}
          />
          <input
            type="password"
            required
            placeholder="Senha"
            onClick={handleSetPassword}
          />
          <button type="button" onClick={handleSubmit}>
            {" "}
            Entrar{" "}
          </button>
          <section>
            <Link to="/CriarConta">Registar</Link>
          </section>

          <p>
            SuperSoft-Copyright <Icon.FaCopyright /> 2021{" "}
          </p>
        </Form>
        <Corpo></Corpo>
      </Principal>
    </Reveal>
  );
};

export default FormLogin;
