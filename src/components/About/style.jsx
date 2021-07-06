import styled from "styled-components";

const Body = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Text = styled.aside`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    margin-top: 100px;
  }
  h1 {
    display: flex;
    align-self: center;
    margin-bottom: 10px;
  }
`;
const Description = styled.aside`
  background-image: linear-gradient(to bottom right, #682ee3, #ee0072, #eeba00);
  border: solid;
  border-radius: 10px;

  .overlay {
    background: #929292;
    position: absolute;
  }
  section {
    margin: 10px;
    border: solid;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    background-color: white;

    &:hover {
    transform: translate(10px);
    }

    i {
      padding: 20px;
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h6 {
        font-size: 15px;
      }
    }
  }
`;

export { Body, Description, Text };
