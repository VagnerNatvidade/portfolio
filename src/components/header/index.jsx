import { FiGrid } from "react-icons/fi";
import { Container } from "./styles";

export function Header({ isBlue = true }) {
  return (
    <Container $isblue={isBlue}>
      <h1>nativ</h1>
      <div>
        <button>EN</button>
        <button>
          <FiGrid />
        </button>
      </div>
    </Container>
  );
}
