import React from "react";
import { MarketHeader, Layout } from "../../components/index";
import useUserContext from "../../hooks/use-user-context";
import { ViewLayout } from "./styles";
import { ProductStatusListItem } from "./ProductStatusListItem/index";
import { Redirect } from "react-router-dom";

const UserHome = () => {
  const { isLogged } = useUserContext();

  return isLogged ? (
    <Layout title="User">
      <MarketHeader />
      <ViewLayout>
        <ProductStatusListItem />
        <ProductStatusListItem />
        <ProductStatusListItem />
      </ViewLayout>
    </Layout>
  ) : (
    <Redirect to="/login" />
  );
};

export default UserHome;
