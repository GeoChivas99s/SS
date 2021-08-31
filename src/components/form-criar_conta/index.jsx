import React from 'react';
import * as Form from '../form-login/style';
import * as Icon from 'react-icons/fa';
import Fade from 'react-reveal';
import { useState } from 'react';
import { signUp } from '../../api';


const FormCriarConta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetName = (e) => setName(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);
  
  const handleSubmit = () => signUp(email, password, name);

  return (
      
      <Form.Principal>
        <Form.Form>
<Fade>
        <div>
        <img src="../../../LogoForm.png" alt="" />
      </div>
      <h1>Entrar</h1>

      <input type="Text" required placeholder="Nome de usuário" onChange={handleSetName} />
      <input type="Email" required placeholder="Email" onChange={handleSetEmail} />
      <input type="password" required placeholder="Senha" onChange={handleSetPassword} />
      {/* <input type="password" required placeholder="Repetir Senha" /> */}
      <button type="button" onClick={handleSubmit}> Cadastrar </button>

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
