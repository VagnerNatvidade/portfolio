import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 24px;
  font-size: 16px;
  background: ${({ theme, $isblue }) =>
    $isblue ? theme.COLORS.BLUE_100 : theme.COLORS.LIGHT_100};

  h1 {
    font-family: "Outfit", sans-serif;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.YELLOW_100};
    transition: 0.1s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  div {
    display: flex;
    gap: 12px;
    height: 24px;
  }

  button {
    height: 24px;
    border: none;
    font-size: 16px;
    color: ${({ theme, $isblue }) =>
      $isblue ? theme.COLORS.LIGHT_100 : theme.COLORS.BLUE_100};
    background: none;
    cursor: pointer;
    transition: 0.1s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  svg {
    margin-top: 2px;
  }
`;
