import React, { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";
import { connect } from "react-redux";
import { authenticate, getUserInfo } from "../state/actions/auth";

const Dashboard = ({authenticate, getUserInfo}) => {
  useEffect(() => {
    const token = queryString.parse(window.location.search);

    if (token.access_token) {
      localStorage.setItem('token', token.access_token);
      authenticate(token.access_token);
      getUserInfo();
    }
  }, []);
  return (
    <div>
      <div>
        <div>This is the dashboard.</div>
      </div>
    </div>
  );
};

export default connect(state => state, {authenticate, getUserInfo})(Dashboard);
