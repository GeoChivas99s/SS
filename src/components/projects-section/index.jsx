import React, { useState, useEffect } from "react";

import { getProjectsByDevEmail } from "../../api";
import useUserContext from "../../hooks/use-user-context";
import ProjectForm from "../project-form";
import {
  ProjectsWrapper,
  ProjectsList,
  ProjectItem,
} from "./projects-section.styles";

const ProjectsSection = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { data: userData } = useUserContext();

  const handleToggleModal = () => setIsOpen(!isOpen);

  const onSuccess = () => {
    alert("Solicitação de projeto enviada");
    setIsOpen(false);
  };

  useEffect(() => {
    (async () => setData(await getProjectsByDevEmail(userData?.email)))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProjectsWrapper>
      {isOpen && (
        <ProjectForm
          onSuccess={onSuccess}
          closeModal={() => setIsOpen(false)}
        />
      )}
      <div>
        <h2>Meus Projetos</h2>
        <button onClick={handleToggleModal}>Adicionar projeto</button>
      </div>

      <ProjectsList>
        {data?.length
          ? data.map(({ name, imageLink, link, state }) => (
              <a href={link} target="_blank" rel="noreferrer">
                <ProjectItem>
                  <img src={imageLink} alt={name} />
                  <div>
                    <h3>{name}</h3>
                    <span>{state === 2 ? "Pendente" : "Aprovado"}</span>
                  </div>
                </ProjectItem>
              </a>
            ))
          : "Não há projetos"}
      </ProjectsList>
    </ProjectsWrapper>
  );
};
export default ProjectsSection;
