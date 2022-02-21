import styled from "styled-components";
import AreaHeader from "../Header/style";

import { Principal, Corpo } from "../landing-body/style";

export const View = styled(Principal)`
  height: 70vh;
  font-size: 11px;
  z-index: 1;
  position: relative;
  padding: 7%;

  .texto {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 40px;
    justify-content: flex-start;
    height: 300px;
    z-index: 4;
    .subs {
      background: rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      margin-top: 55px;
      flex: 1;
      align-self: center;
      height: 50px;
    }
    h1 {
      margin-top: 20px;
    }
    h4 {
      padding: 5px;
    }
    h2 {
      margin-top: 20px;
    }
    input {
      padding: 8px;
      background: rgba(255, 255, 255, 0.4);
      width: 100%;
      border: none;
      border-radius: 10px;
      ::placeholder {
        padding: 5px;
        color: white;
      }
    }
  }
  .Text {
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .EuSou {
      padding: 100px;
    }
    .type {
      background: rgba(255, 255, 255, 0.3);
      h1 {
        padding: 50px;
      }
    }
  }
`;

export const Overlay = styled(Corpo)`
  height: 70vh;
  z-index: 2;
`;

export const Navbar = styled(AreaHeader)`
  .button {
    margin-top: 10px;
    align-items: center;
    display: flex;
    text-decoration: none;
    color: #971d37;
    background: #ffffff;
    padding: 5px;
    width: 130px;
    justify-content: center;
    border-radius: 5px;
    margin-right: 40px;
  }

  li {
    list-style: none;
  }

  .buttonSearch {
    display: flex;

    width: 300px;
  }
  .Category {
    display: flex;
    margin-left: -300px;
  }
  height: 70px;
`;
