import React, { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";
import { connect } from "react-redux";
import { authenticate, getUserInfo, sendUserInfo } from "../state/actions/auth";



const Dashboard = ({ auth: {
  display_name, email, href, image
},authenticate, getUserInfo, sendUserInfo }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const query_token = queryString.parse(window.location.search);

    if (!token || token !== query_token.access_token) {
      localStorage.setItem("token", query_token.access_token);
      authenticate(query_token.acess_token);
    } 
    getUserInfo();
  }, []);

  useEffect(() => {
    sendUserInfo({display_name, email, href, image})
  },[display_name])


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
