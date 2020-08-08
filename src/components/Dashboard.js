import React, { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";
import { connect } from "react-redux";
import { authenticate, getUserInfo, sendUserInfo } from "../state/actions/auth";



const Dashboard = () => {
  return (
    <div>
      <div>
        <div>This is the dashboard.</div>
      </div>
    </div>
  );
};

export default connect((state) => state, { authenticate, getUserInfo, sendUserInfo })(
  Dashboard
);
