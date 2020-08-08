import React, { useEffect } from "react";
import styled from "styled-components";
import Styles, { Button } from "../styles";
import { Icon } from "../assets";
import { connect } from "react-redux";

import { login } from "../state/actions/auth";

const Home = ({ history, auth: { id, isLoggedIn }, login }) => {


  return (
    <HomeContainer>
      <SiteTitle>
        Plotify<DotSpan>.</DotSpan>
      </SiteTitle>
      <p>Analyze your Spotify library, playlists and history.</p>
      <LoginButton onClick={login}>
        <Icon />
        Login with Spotify
      </LoginButton>
    </HomeContainer>
  );
};
export default connect((state) => state, { login })(Home);

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SiteTitle = styled.h1`
  font-size: 6rem;
  color: ${Styles.font.titlePrimary};
`;
const DotSpan = styled.span`
  color: ${Styles.background.accentColor};
`;

const LoginButton = styled(Button)``;
