import React from "react";
import { Redirect } from "react-router-dom";
import { isLogged } from "../../api";
import { Header, FormLogin, Layout } from "../../components/index";

const Login = () =>
  !isLogged() ? (
    <Layout pageTitle="Login">
      <Header />
      <FormLogin />
    </Layout>
  ) : (
    <Redirect to="/" />
  );

export default Login;
