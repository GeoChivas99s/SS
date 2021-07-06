import styled from "styled-components";

const Principal = styled.main`

font-family:Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
  color: white;
  background-image: linear-gradient(to bottom right, #682ee3, #ee0072, #eeba00);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .img {
    z-index: 3;
  }
  
  .conteudo {
    z-index: 3;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    .skills {
      display: flex;
      flex-direction: row;

      height: 200px;
      justify-content: space-between;

      .icones {
   
      margin-left:-30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 150px;

        h4 {
          padding-top: 10px;
        }
        i {
          display: flex;
          border: 1.3px solid;
          font-size: 3rem;
          padding: 15px;
          border-radius: 40px;
        }

      }
    }
  }
`;

const Corpo = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  background-image: linear-gradient(to bottom right, black 70%, gray, white);
  position: absolute;
`;

export { Corpo, Principal };
export default Principal;
