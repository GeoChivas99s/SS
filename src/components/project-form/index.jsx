import React, { useState, useContext } from "react";

import { addProject } from "../../api";
import userContext from "../../context/user";
import { Form, FormWrapper } from "./style";

const ProjectForm = ({ onSuccess, closeModal }) => {
  const [name, setName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [link, setLink] = useState("");

  const handleSetName = (e) => setName(e.target.value);
  const handleSetImageLink = (e) => setImageLink(e.target.value);
  const handleSetLink = (e) => setLink(e.target.value);

  const { data } = useContext(userContext);

  const handleSubmit = () =>
    addProject(name, data.email, imageLink, link, onSuccess);

  return (
    <FormWrapper onClick={closeModal}>
      <Form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <div>
          <img src="../../../LogoForm.png" alt="" />
        </div>
        <h1>ADICIONAR PROJETO</h1>
        <input
          required
          type="text"
          placeholder="Nome do Project"
          onChange={handleSetName}
        />
        <input
          required
          type="text"
          placeholder="Link da imagem"
          onChange={handleSetImageLink}
        />
        <input
          required
          type="text"
          placeholder="Link do projeto"
          onChange={handleSetLink}
        />
        <button type="button" onClick={handleSubmit}>
          Cadastrar Projecto
        </button>

        <p>SuperSoft-Copyright © 2021</p>
      </Form>
    </FormWrapper>
  );
};

export default ProjectForm;
