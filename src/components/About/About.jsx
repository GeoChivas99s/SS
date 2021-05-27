import React from "react";
import * as Icons from "react-icons/bs";
import * as Styled from "./style.jsx";

const data = [
  {
    id: 1,
    text: (
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque
        ipsa tempore ad, culpa recusandae in voluptatum <br />
        doloribus? Expedita autem culpa enim quae blanditiis nostrum <br />
        nihilexplicabo neque nesciunt. Sequi, ipsa.
      </h4>
    ),
    icon: <Icons.BsTerminalFill />,
    info: "Nossos Valores",
  },
  {
    id: 2,
    text: (
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque
        ipsa tempore ad, culpa recusandae in voluptatum <br />
        doloribus? Expedita autem culpa enim quae blanditiis nostrum <br />
        nihilexplicabo neque nesciunt. Sequi, ipsa.
      </h4>
    ),
    icon: <Icons.BsTerminalFill />,
    info: "Nossa Visão",
  },
  {
    id: 3,
    text: (
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque
        ipsa tempore ad, culpa recusandae in voluptatum <br />
        doloribus? Expedita autem culpa enim quae blanditiis nostrum <br />
        nihilexplicabo neque nesciunt. Sequi, ipsa.
      </h4>
    ),
    icon: <Icons.BsTerminalFill />,
    info: "Nossa Missão",
  },
];

export default function About() {
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
