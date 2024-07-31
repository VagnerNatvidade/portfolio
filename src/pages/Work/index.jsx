import { useState } from "react";

import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";

export function Work() {
  const [sidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <Container>
      <Header isBlue toggleSidebar={toggleSidebar} />
      {sidebar === true ? <Sidebar /> : null}
      <div className="main">
        <h3>All were made with the greatest dedication</h3>
        <div>
          <ProjectCard
            projectName={"RocketMovie"}
            byWho={"by Rocketseat"}
            url={"rocketseat.com.br"}
          />
          <ProjectCard
            projectName={"nativ"}
            byWho={"by me"}
            url={"in_construction"}
          />
        </div>
      </div>
    </Container>
  );
}
