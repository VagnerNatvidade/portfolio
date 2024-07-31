import styled from "styled-components";

export const Container = styled.div`
  min-width: 360px;
  height: 100vh;

  .main {
    h1 {
      padding: 30% 24px 12px;
      font-family: "Outfit", sans-serif;
      font-size: 48px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: ${({ theme }) => theme.COLORS.BLUE_100};
    }

    p {
      margin: 12px 24px 8px;
      text-align: justify;
    }

    button {
      margin: 0 24px;
      padding: 4px 8px;
      border: none;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.DARK_400};
      background: none;
      transition: 0.2s ease;

      &:hover {
        background: #ddd;
      }
    }
  }
`;
