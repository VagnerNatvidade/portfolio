import { Header } from "../Header";
import { Container } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <Header isBlue={false} />
      <div className="nav">
        <nav>
          <a href="/">home</a>
          <a href="/work">work</a>
          <a href="/work">about</a>
          <a href="/work">contact</a>
          <ul>
            <li>
              <a href="https://www.instagram.com/vagner_natividade/">
                instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vagner-jr/">linkedin</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
