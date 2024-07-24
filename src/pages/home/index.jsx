import { Header } from "../../components/header";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
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
      <div className="photo">
        <div>
          <img src="https://i.ibb.co/8dXSzps/IMG-1251-1.png" alt="minha foto" />
        </div>
      </div>
    </Container>
  );
}
