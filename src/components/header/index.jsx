import { FiGrid } from "react-icons/fi";

import nativLogo from "../../assets/logo.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
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
