import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { Container } from "./styles";

export function Work() {
  return (
    <Container>
      <Header isBlue />
      <div className="main">
        <h3>All were made with the greatest dedication</h3>
        <div>
          <ProjectCard
            projectName={"RocketMovie"}
            byWho={"by Rocketseat"}
            url={"rocketseat.com.br"}
          />
          <ProjectCard
            projectName={"RocketMovie"}
            byWho={"by Rocketseat"}
            url={"rocketseat.com.br"}
          />
        </div>
      </div>
    </Container>
  );
}
