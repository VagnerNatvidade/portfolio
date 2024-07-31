import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 72px;
  right: 32px;
  z-index: 10;
  padding: 24px;
  border-radius: 2px;
  background: ${({ theme }) => theme.COLORS.LIGHT_100};
  animation: menubar 0.3s forwards;

  ul,
  nav {
    display: flex;
  }

  nav {
    flex-direction: column;

    a {
      text-decoration: none;
      transition: 0.1s ease;

      &:hover {
        filter: brightness(0.8);
      }
    }

    > a + a {
      margin-top: 10px;
    }

    > a {
      font-size: 40px;
      font-weight: bold;
      font-family: "Outifit", sans-serif;
      text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }

    ul {
      width: 200px;
      margin-left: 12px;
      gap: 16px;
    }

    li {
      list-style: none;

      a {
        color: ${({ theme }) => theme.COLORS.DARK_400};
      }
    }

    @keyframes menubar {
      0% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;
