import React from "react";
import { Redirect } from "react-router-dom";
import { Header, FormLogin, Layout } from "../../components/index";
import useUserContext from "../../hooks/use-user-context";

const Login = () => {
  const { isLogged } = useUserContext();
  
  return !isLogged ? (
    <Layout pageTitle="Login">
      <Header />
      <FormLogin />
    </Layout>
  ) : (
    <Redirect to="/user" />
  );
};

export default Login;
