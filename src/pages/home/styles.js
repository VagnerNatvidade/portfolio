import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr 1fr;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BLUE_100};

  .main {
    min-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 40px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    h1 {
      width: 180px;
      margin-bottom: 16px;
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

  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: ${({ theme }) => theme.COLORS.YELLOW_100};

    > div {
      position: relative;
      width: 200px;
      height: 200px;

      &::after {
        content: "";
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 0;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        opacity: 0.8;
      }

      img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
