import React from "react";
import { Redirect } from "react-router-dom";
import { Header, Hero, ProjectsSection } from "../../components";
import useUserContext from "../../hooks/use-user-context";

const DeveloperView = () => {
  const { isLogged, data } = useUserContext();

  if (!isLogged) return <Redirect to="/login" />;

  if (!data?.type || data.type !== "1") return <Redirect to="/use" />;

  return (
    <>
      <Header />
      <Hero />
      <ProjectsSection />
    </>
  );
};

export default DeveloperView;
