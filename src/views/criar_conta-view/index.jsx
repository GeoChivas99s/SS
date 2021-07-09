import React from "react";
import { Redirect } from "react-router-dom";
import { isLogged } from "../../api";
import { Header, FormCriarConta, Layout } from "../../components/index";

const CreateAccount = () =>
  !isLogged() ? (
    <Layout pageTitle="Criar Conta">
      <Header />
      <FormCriarConta />
    </Layout>
  ) : (
    <Redirect to="/" />
  );

export default CreateAccount;
