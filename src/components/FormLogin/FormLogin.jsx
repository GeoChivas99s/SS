import React from "react";
import * as Icon from "react-icons/fa";

import { Principal, Corpo, Form } from "./style";

const FormLogin = () => (
  <>
    <Principal>
      <Form>
        <div>
          <img src="../../../LogoForm.png" alt="" />
        </div>
        <h1>Entrar</h1>
        <input type="Email" required placeholder="Email" />
        <input type="password" required placeholder="Senha" />
        <button> Entrar </button>
        <section>
          <a href="">Registar</a>
          <a href="">Recuperar Conta</a>
        </section>

        <p>
          SoftLuctionS-Copyright <Icon.FaCopyright /> 2021{" "}
        </p>
      </Form>

      <Corpo></Corpo>
    </Principal>
  </>
);

export default FormLogin;
