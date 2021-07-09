import React from "react";
import { MarketHeader, Layout } from "../../components/index";
import { ViewLayout } from "./styles.jsx";
import { ProductStatusListItem } from "./ProductStatusListItem/index"

const UserHome = () => (
  <Layout title="User">
    <MarketHeader />
    <ViewLayout>
        <ProductStatusListItem />
        <ProductStatusListItem />
        <ProductStatusListItem />
    </ViewLayout>
  </Layout>
);

export default UserHome;
