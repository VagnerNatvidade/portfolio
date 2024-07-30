import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  text-align: left;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.05);

  transition: 0.2s ease;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLUE_100};

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
