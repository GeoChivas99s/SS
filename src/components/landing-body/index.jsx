import React from "react";
import { Principal, Corpo } from "./style";
import * as Icon from "react-icons/fa";
import {Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
const skills = [
  { nome: "Certificação", icon: <Icon.FaCertificate />, id: 1 },
  { nome: "Movimentação", icon: <Icon.FaDollarSign />, id: 2 },
  { nome: "Comunidade", icon: <Icon.FaPersonBooth />, id: 3 },
  { nome: "Transações", icon: <Icon.FaExchangeAlt />, id: 4 },
];

const LandingBody = () => {
  return (
    <Principal>
      <aside className="img">
        <Link to="/">    <img src="../../../Logo.png" alt="" srcset="" /> </Link>
      </aside>
  <Zoom>
      <aside className="conteudo">
        <h1>SOFTLUCTION</h1>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Est quibusdam consequuntur reprehenderit adipisci <br />
          rerum libero ullam cupiditate
          <br /> odio tenetur, accusantium animi excepturi delectus
          necessitatibus
          <br /> quaerat temporibus <br />
          praesentium omnis possimus maxime.
        </h4>

        <section className="skills">
          {skills.map((skill) => {
            return (
              <Zoom>
              <div key={skill.id} className="icones">
                <i> {skill.icon} </i>
     
                <h4> {skill.nome} </h4>
              </div></Zoom>
            );
          })}
        </section>
      </aside>
      </Zoom>

      <Corpo></Corpo>
    </Principal>
  );
};

export default LandingBody;
