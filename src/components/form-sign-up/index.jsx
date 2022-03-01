import * as Form from "../form-login/style";
import * as Icon from "react-icons/fa";
import Fade from "react-reveal";
import React, { useContext, useState } from "react";
import { signUp } from "../../api";
import userContext from "../../context/user";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const FormCriarConta = () => {
  const { push } = useHistory();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogged, setUserData } = useContext(userContext);

  const handleSetName = (e) => setName(e.target.value);
  const handleSetType = (e) => setType(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);

  const onSignUp = (name, emailAddress, type) => {
    setIsLogged(true);
    setUserData({
      name,
      type,
      email: emailAddress,
    });
    push("/user");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, name, type, onSignUp);
  };

  return (
    <Form.Principal>
      <Form.Form onSubmit={handleSubmit}>
        <Fade>
          <div>
            <img src="../../../LogoForm.png" alt="" />
          </div>
          <h1>Cadastrar</h1>

          <input
            type="Text"
            required
            placeholder="Nome de usuário"
            onChange={handleSetName}
          />
          <input
            type="Email"
            required
            placeholder="Email"
            onChange={handleSetEmail}
          />
          <select required onChange={handleSetType} defaultValue="">
            <option value="" disabled>
              Selecione o tipo
            </option>
            <option value={1}>Desenvolvedor</option>
            <option value={2}>Empreendedor</option>
          </select>
          <input
            type="password"
            required
            placeholder="Senha"
            onChange={handleSetPassword}
          />
          <button type="submit" onClick={handleSubmit}>
            Cadastrar
          </button>

          <section>
            <Link to="/login">Entrar</Link>
          </section>

          <p>
            SoftLuctionS-Copyright <Icon.FaCopyright /> 2021{" "}
          </p>
        </Fade>
      </Form.Form>

      <Form.Corpo></Form.Corpo>
    </Form.Principal>
  );
};

export default FormCriarConta;
