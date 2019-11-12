import styled, { css } from "styled-components";

export const StyledToolbar = styled.div`
    height: 38px;
    -webkit-app-region: drag;
    user-drag: none;
    user-select: none;
    display: flex;
    justify-content: space-between;
`;

export const DropLogo = styled.img`
  width: 40px;
  margin-left: 10px;
  height: 38px;
  margin-top: 1.6px;
`;

export const DropLogoWrapper = styled.div`
  cursor: pointer;
`;