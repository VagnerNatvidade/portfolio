import { Container } from "./styles";

export function ProjectCard({ projectName, byWho, url }) {
  return (
    <Container>
      <h1>{projectName}</h1>
      <a target="_blank" href={"https:" + url}>
        {byWho} - {url}
      </a>
    </Container>
  );
}
