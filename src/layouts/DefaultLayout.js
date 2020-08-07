import React from "react";
import styled from "styled-components";

import { Route } from "react-router-dom";
import { Nav } from "../components";
import { connect } from "react-redux";
import { authenticate } from "../state/actions/auth";

const DefaultLayout = ({ component: Component, authenticate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <LayoutContainer>
            <Nav />
            <ComponentContainer>
              <Component {...props} />
            </ComponentContainer>
          </LayoutContainer>
        );
      }}
    />
  );
};
export default connect((state) => state, { authenticate })(DefaultLayout);

const LayoutContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
