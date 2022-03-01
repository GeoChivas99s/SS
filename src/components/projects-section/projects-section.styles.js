import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 1280px;
  flex-direction: column;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectItem = styled.div`
  margin: 1rem;
  height: 10rem;
  padding: 1rem;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  & img {
    width: 8rem;
    height: 8rem;
  }
`;
