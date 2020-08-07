import React from "react";
import styled from "styled-components";
import Styles from "../styles";

export const Nav = () => {
  return (
    <NavContainer>
      <div>
        <h1>
          Plotify<DotSpan>.</DotSpan>
        </h1>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  background-color: ${Styles.background.backgroundSecondary};
  height: 10%;
  color: ${Styles.font.titleSecondary};
  padding-left: 4rem;
`;
const DotSpan = styled.span`
  color: ${Styles.background.accentColor};
`;
