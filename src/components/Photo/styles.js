import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  flex: 1;
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
`;
