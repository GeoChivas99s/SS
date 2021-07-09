import React from "react";
import { MarketHeader, Layout } from "../../components/index";
import useUserContext from "../../hooks/use-user-context";
import { ViewLayout } from "./styles";
import { ProductStatusListItem } from "./ProductStatusListItem/index";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import img from "../market-view/1.png";
import img1 from "../market-view/2.png";
import img2 from "../market-view/3.png";
const data = [
  { name: "Translang", description: "Leitor de caracteres", days: 240 , link:'https://translang.vercel.app' , img },
  { name: "Mathous", description: "Resolvedor de cenas", days: 15 , link:'https://translang.vercel.app' ,img: img1 },
  { name: "Even Be", description: "Gestão", days: 5  , link:'https://translang.vercel.app' , img: img2},
];

const UserHome = () => {
  const { isLogged } = useUserContext();

  return isLogged ? (
    <Layout title="User">
      <MarketHeader />
      <ViewLayout>
        
        {data.map((item, index) => (
          <ProductStatusListItem {...item} key={index} />
        ))}
      </ViewLayout>
      <Button to="/Mercado"> Ver mais produtos</Button>
    </Layout>
  ) : (
    <Redirect to="/login" />
  );
};

export default UserHome;

const Button = styled(Link)`
  background-color: #a74c4c;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  text-align: center;
  color: #ffff;
  width: 70%;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 5rem;
`;
