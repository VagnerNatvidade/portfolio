import { FiGrid } from "react-icons/fi";
import { Container } from "./styles";

export function Header({ isBlue = false, toggleSidebar }) {
  return (
    <Container $isblue={!isBlue}>
      <h1>nativ</h1>
      <div>
        <button>EN</button>
        <button onClick={toggleSidebar}>
          <FiGrid />
        </button>
      </div>
    </Container>
  );
}
