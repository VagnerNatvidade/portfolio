import { useState } from "react";

import { Header } from "../../components/Header";
import { Photo } from "../../components/Photo";
import { Sidebar } from "../../components/Sidebar";

import { Container } from "./styles";

export function Home() {
  const [sidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    setSidebar(!sidebar);
    console.log(sidebar);
  }

  return (
    <Container>
      <Header toggleSidebar={toggleSidebar} />
      {sidebar === true ? <Sidebar /> : null}
      <div className="main">
        <h1>
          Vagner Natividades<span>.</span>
        </h1>
        <p>
          I'm just trying to use all my studies and love for programming to help
          other people.
        </p>
        <div>
          <p>
            My greatest skills are in JavaScript and React.JS, despite studying
            Node.Js
          </p>
          <p>
            Developer Status: anxious to start the journey as a junior developer
            in a company.
          </p>
        </div>
      </div>
      <Photo />
    </Container>
  );
}
