import React, { useEffect } from "react";
import styled from "styled-components";
import queryString from "query-string";
import { Route, withRouter } from "react-router-dom";
import moment from "moment";
import { Nav } from "../components";
import { connect } from "react-redux";
import {
  authenticate,
  getUserInfo,
  sendUserInfo,
  removeToken,
} from "../state/actions/auth";

const DefaultLayout = ({
  component: Component,
  authenticate,
  getUserInfo,
  sendUserInfo,
  removeToken,
  auth: { display_name, email, href, image, token },
  history,
  ...rest
}) => {
 

  useEffect(() => {
    const access_token = localStorage.getItem("token");
    const query_token = queryString.parse(window.location.hash.substring(1))
      .access_token;

    if (!access_token && query_token) {
      const store_token = JSON.stringify([
        query_token,
        moment().add(5, "minutes"),
      ]);
      console.log(store_token);
      localStorage.setItem("token", store_token);
      authenticate(store_token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const expiration_time = JSON.parse(token)[1];
  

      console.log("checking token");
      console.log(expiration_time);
      console.log(`now: ${moment()}`);

      if (moment(expiration_time).isBefore(moment())) {
        removeToken();
        history.push("/");
      }
    }
  });

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token]);

  useEffect(() => {
    if (display_name) {
      sendUserInfo({ display_name, email, href, image });
      history.push("/Dashboard");
    }
  }, [display_name]);

  // useEffect(() => {
  //   if (!token) {
  //     history.push("/");
  //   }
  // }, []);

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
export default connect((state) => state, {
  authenticate,
  getUserInfo,
  sendUserInfo,
  removeToken,
})(withRouter(DefaultLayout));

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
