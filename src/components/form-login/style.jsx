import styled from "styled-components";

const Principal = styled.main`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #682ee3, #ee0072, #eeba00);
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 600ms;
`;
const Corpo = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  background-image: linear-gradient(to bottom right, black 70%, gray, white);
  position: absolute;
  transition: 600ms;
`;

const Form = styled.form`
  z-index: 3;
  width: 500px;
  height: 500px;
  padding: 3rem;
  display: flex;
  transition: 600ms;
  background: #fff;
  align-items: center;
  border-radius: 1rem;
  flex-direction: column;
  padding-bottom: 0.5rem;
  justify-content: space-around;
  input, select {
    width: 100%;
    border: none;
    outline: none;
    transition: 600ms;
    margin-bottom: 10px;
    border-radius: 1.5rem;
    padding: 0.85rem 1.5rem;
    background-color: #d8d8d8;
  }
  button {
    width: 100%;
    border: none;
    outline: none;
    color: white;
    padding: 0.85rem;
    font-weight: 600;
    transition: 600ms;
    border-radius: 1.5rem;
    text-transform: uppercase;
    background-color: #0593cf;
  }

  section {
    width: 100%;
    display: flex;
    transition: 600ms;
    margin-bottom: 60px;
    justify-content: space-around;
    a {
      color: #0593cf;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
  p {
    color: #d8d8d8;
  }
`;

export { Principal, Corpo, Form };
