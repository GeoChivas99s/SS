import React from "react";
import { Header, FormCriarConta, Layout } from "../../components/index";

const CreateAccount = () => {
  return (
    <Layout pageTitle='Criar Conta'>
      <Header />
      <FormCriarConta />
    </Layout>
  );
};

export default CreateAccount;
