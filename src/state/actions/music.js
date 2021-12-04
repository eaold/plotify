import * as types from "../types";
import { axiosWithAuth } from "../../utils/axios";

const topArtistsMonthUrl =
  "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=short_term";
const topArtistsOverallUrl =
  "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=long_term";
const topMusicMonthUrl =
  "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term";
const topMusicOverallUrl =
  "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=long_term";
const playlistsUrl = "https://api.spotify.com/v1/me/playlists";
const tracksUrl = "https://api.spotify.com/v1/me/tracks";
const albumsUrl = "https://api.spotify.com/v1/me/albums";

export const fetchTopArtistsMonth = () => async (dispatch) => {
  const topArtistsMonth = await axiosWithAuth().get(`${topArtistsMonthUrl}`);
  dispatch({
    type: types.FETCH_TOP_ARTISTS_MONTH_SUCCESS,
    payload: topArtistsMonth.data.items,
  });
};
export const fetchTopArtistsOverall = () => async (dispatch) => {
  const topArtistsOverall = await axiosWithAuth().get(
    `${topArtistsOverallUrl}`
  );
  dispatch({
    type: types.FETCH_TOP_ARTISTS_OVERALL_SUCCESS,
    payload: topArtistsOverall.data.items,
  });
};
export const fetchTopMusicMonth = () => async (dispatch) => {
  const topMusicMonth = await axiosWithAuth().get(`${topMusicMonthUrl}`);
  dispatch({
    type: types.FETCH_TOP_MUSIC_MONTH_SUCCESS,
    payload: topMusicMonth.data.items,
  });
};
export const fetchTopMusicOverall = () => async (dispatch) => {
  const topMusicOverall = await axiosWithAuth().get(`${topMusicOverallUrl}`);
  dispatch({
    type: types.FETCH_TOP_MUSIC_OVERALL_SUCCESS,
    payload: topMusicOverall.data.items,
  });
};
export const fetchPlaylists = () => async (dispatch) => {
  const playlists = await axiosWithAuth().get(`${playlistsUrl}`);
  dispatch({ type: types.FETCH_PLAYISTS_SUCCESS, payload: playlists });
};
export const fetchTracks = () => async (dispatch) => {
  const tracks = await axiosWithAuth().get(`${tracksUrl}`);
  dispatch({ type: types.FETCH_TRACKS_SUCCESS, payload: tracks });
};
export const fetchAlbums = () => async (dispatch) => {
  const albums = await axiosWithAuth().get(`${albumsUrl}`);
  dispatch({ type: types.FETCH_ALBUMS_SUCCESS, payload: albums });
};
