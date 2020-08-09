import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { GraphContainer } from "../styles";
import {
  fetchTopArtistsMonth,
  fetchTopArtistsOverall,
  fetchTopMusicMonth,
  fetchTopMusicOverall,
  fetchPlaylists,
  fetchAlbums,
  fetchTracks,
} from "../state/actions";

const Dashboard = ({
  auth: { display_name, token },
  fetchTopArtistsMonth,
  fetchTopArtistsOverall,
  fetchTopMusicMonth,
  fetchTopMusicOverall,
  fetchPlaylists,
  fetchAlbums,
  fetchTracks,
}) => {
  useEffect(() => {
    if (token) {
      fetchTopArtistsMonth();
      fetchTopArtistsOverall();
      fetchTopMusicMonth();
      fetchTopMusicOverall();
      fetchPlaylists();
      fetchAlbums();
      fetchTracks();
    }
  }, [token]);

  return (
    <DashboardContainer>
      <GraphContainer>
        <h3>Welcome, {display_name}</h3>
      </GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
      <GraphContainer></GraphContainer>
    </DashboardContainer>
  );
};

export default connect((state) => state, {
  fetchTopArtistsMonth,
  fetchTopArtistsOverall,
  fetchTopMusicMonth,
  fetchTopMusicOverall,
  fetchPlaylists,
  fetchAlbums,
  fetchTracks,
})(Dashboard);

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  flex-wrap: wrap;
  h3 {
    align-self: flex-start;
  }
`;
