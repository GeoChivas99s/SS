import React from "react";
import * as Icon from "react-icons/fa";
import {Link } from 'react-router-dom';
import { Principal, Corpo, Form } from "./style";
import Reveal from 'react-reveal';

const FormLogin = () => (
  <Reveal>
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
          <Link>Registar</Link>
          <Link>Recuperar Conta</Link>
        </section>

        <p>
          SoftLuctionS-Copyright <Icon.FaCopyright /> 2021{" "}
        </p>
      </Form>
      
      <Corpo></Corpo>
    </Principal>
    </Reveal> 

);

export  default FormLogin;
