import styled from "styled-components";

const AreaHeader = styled.header`
  z-index: 10;
  width: 100%;
  padding: 0 7%;
  color: white;
  height: 50px;
  display: flex;
  position: fixed;
  transition: 450ms;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.color };
  height: ${(props)=> props.height};

  a {
    color: white;
    text-decoration: none;
  }
  .logo {
    top: 5px;
    left: 130px;
    width: 70px;
    position: absolute;
 
    img {
      width: 100%;
    }
  
  }
  .menu {
    width: 50%;
    left: -120vh;
    height: 100vh;
    transition: 700ms;
    position: absolute;
    background-color: black;

    z-index: 4;
    display: flex;
    flex-direction: column;
    i {
      display: flex;
      cursor: pointer;
      font-size: 3rem;
      margin-right: 20px;
      align-self: flex-end;
    }
    li {
      margin-top: 30px;
      list-style: none;
      margin-left: 5px;
      font-size: 1.2rem;
    }
  }

  .menu.active {
    left: 0;
    transition: 700ms;
  }

  div {
    i {
      display: none;
      transition: 450ms;
    }


    width: 60%;
    display: flex;
    height: 40px;
    align-self: flex-end;
    margin-top: 10px;
    transition: 450ms;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
      transition: 450ms;
      width: 75%;
    }

    @media (max-width: 700px) {
      transition: 450ms;
      width: 100%;

      i {
        display: flex;
        margin-left: 30px;
        font-size: 2rem;
      }
      .logo {
        display: none;
      }
    }

    nav {
      transition: 450ms;
      @media (max-width: 700px) {
        display: none;
      }

      display: flex;
      list-style-type: none;
      margin-top: 10px;

      li {
        padding: 15px;
        flex-wrap: nowrap;
      }
    }

    .Login {
      margin-top: 10px;
      align-items: center;
      display: flex;
      text-decoration: none;
      color: #971d37;
      background: #ffffff;
      padding: 5px;
      width: 100px;
      justify-content: center;
      border-radius: 5px;
      margin-right: 40px;
    }
  }
`;

export default AreaHeader;
