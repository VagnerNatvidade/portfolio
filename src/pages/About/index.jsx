import { useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";

export function About() {
  const [sidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <Container>
      <Header toggleSidebar={toggleSidebar} />
      {sidebar === true ? <Sidebar /> : null}
      <div className="main">
        <h1>About</h1>
        <p>
          My name is Vagner Junior and I use nativ on my website because my
          middle name is Natividade. I have been studying programming since 2023
          with a focus on web development with JavaScript, React and Node. I'm
          excited to get a junior developer position so I can take what I've
          already learned and learn even more about app development.
        </p>
        <button>resume</button>
      </div>
    </Container>
  );
}
