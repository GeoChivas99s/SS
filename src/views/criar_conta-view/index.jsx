import React from "react";
import { Redirect } from "react-router-dom";
import { Header, FormCriarConta, Layout } from "../../components/index";
import useUserContext from "../../hooks/use-user-context";

const CreateAccount = () => {
  const { isLogged } = useUserContext();

  return !isLogged ? (
    <Layout pageTitle="Criar Conta">
      <Header />
      <FormCriarConta />
    </Layout>
  ) : (
    <Redirect to="/user" />
  );
};
export default CreateAccount;
