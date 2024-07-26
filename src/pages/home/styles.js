import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BLUE_100};

  .main {
    flex: 1;
    min-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 40px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    h1 {
      width: 180px;
      margin-bottom: 16px;
      font-family: "Outfit", sans-serif;
      color: ${({ theme }) => theme.COLORS.YELLOW_100};

      span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    > p {
      margin-bottom: auto;
    }

    > div {
      display: flex;
      justify-content: space-between;
      p {
        width: 46%;
        font-size: 9px;
      }
    }
  }
`;
