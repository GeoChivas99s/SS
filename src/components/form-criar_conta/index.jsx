import React from 'react';
import * as Form from '../form-login/style';
import * as Icon from 'react-icons/fa';
import Fade from 'react-reveal';


const FormCriarConta = () => {
    return (
      
      <Form.Principal>
        <Form.Form>
<Fade>
        <div>
        <img src="../../../LogoForm.png" alt="" />
      </div>
      <h1>Entrar</h1>

      <input type="Text" required placeholder="Nome de usuário" />
      <input type="Email" required placeholder="Email" />
      <input type="password" required placeholder="Senha" />
      <input type="password" required placeholder="Repetir Senha" />
      <button> Cadastrar </button>

      <p>
        SoftLuctionS-Copyright <Icon.FaCopyright /> 2021{" "}
      </p> 
      </Fade>
      </Form.Form>
     
      <Form.Corpo></Form.Corpo>
      </Form.Principal>
     
    );
}

export default FormCriarConta;
