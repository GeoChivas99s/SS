import React from "react";
import * as Styled from "./style.jsx";
import data from '../../data/dataAbout';


const  About =() => {
  
  return (
    <>
      <Styled.Body>
        <Styled.Text>
          <h1>QUEM SOMOS</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Cumque ipsa tempore ad, culpa recusandae in voluptatum <br />
            doloribus? Expedita autem culpa enim quae blanditiis nostrum <br />
            nihil explicabo neque nesciunt. Sequi, ipsa.
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Cumque ipsa tempore ad, culpa recusandae in voluptatum <br />
            doloribus? Expedita autem culpa enim quae blanditiis nostrum <br />
            nihil explicabo neque nesciunt. Sequi, ipsa.
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Cumque ipsa tempore ad, culpa recusandae in voluptatum <br />
            doloribus? Expedita autem culpa enim quae blanditiis nostrum <br />
            nihil explicabo neque nesciunt. Sequi, ipsa.
          </h3>
        </Styled.Text>

        <Styled.Description>
          <div className="overlay"></div>

          {data.map((dat) => {
            return (
              <section key={dat.id}>
                <i>
                  {" "}
                  {dat.icon}
                  <h6>{dat.info}</h6>{" "}
                </i>

                {dat.text}
              </section>
            );
          })}
        </Styled.Description>
      </Styled.Body>
    </>
  );
}
 export default About;