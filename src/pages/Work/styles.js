import styled from "styled-components";

export const Container = styled.div`
  min-width: 360px;
  text-align: center;

  .main {
    padding: 100px 24px 24px;

    div > div:nth-child(odd) {
      border-right: 12px solid ${({ theme }) => theme.COLORS.BLUE_100};
    }

    div > div:nth-child(even) {
      border-right: 12px solid ${({ theme }) => theme.COLORS.YELLOW_100};
    }

    div + div {
      margin-top: 18px;
    }
  }

  h3 {
    font-weight: normal;
    margin-bottom: 24px;
  }
`;
