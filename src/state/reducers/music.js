import * as types from "../types";

const initialState = {
  isFetching: false,
  isLoadingMusic: false,
  error: "",
  top: {
    top_music: {
      top_music_month: "",
      top_music_overall: "",
    },
    top_artists: {
      top_artists_month: "",
      top_artists_overall: "",
    },
  },
  playlists: "",
  library: {
    tracks: "",
    albums: "",
  },
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOP_ARTISTS_MONTH:
    case types.FETCH_TOP_ARTISTS_OVERALL:
    case types.FETCH_TOP_MUSIC_MONTH:
    case types.FETCH_TOP_MUSIC_OVERALL:
    case types.FETCH_PLAYISTS:
    case types.FETCH_ALBUMS:
    case types.FETCH_TRACKS:
      return {
        ...state,
        isFetching: true,
        isLoadingMusic: true,
      };
    case types.FETCH_TOP_ARTISTS_MONTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        top: {
          ...state.top,
          top_artists: {
            ...state.top_artists,
            top_artists_month: action.payload,
          },
        },
      };
    case types.FETCH_TOP_ARTISTS_OVERALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        top: {
          ...state.top,
          top_artists: {
            ...state.top_artists,
            top_artists_overall: action.payload,
          },
        },
      };
    case types.FETCH_TOP_MUSIC_MONTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        top: {
          ...state.top,
          top_music: {
            ...state.top_music,
            top_music_month: action.payload,
          },
        },
      };
    case types.FETCH_TOP_MUSIC_OVERALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        top: {
          ...state.top,
          top_music: {
            ...state.top_music,
            top_music_overall: action.payload,
          },
        },
      };
    case types.FETCH_PLAYISTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        playlists: action.payload,
      };
    case types.FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        library: {
          ...state.library,
          tracks: action.payload,
        },
      };
    case types.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        library: {
          ...state.library,
          albums: action.payload,
        },
      };

    case types.FETCH_TOP_ARTISTS_MONTH_FAILURE:
    case types.FETCH_TOP_ARTISTS_OVERALL_FAILURE:
    case types.FETCH_TOP_MUSIC_MONTH_FAILURE:
    case types.FETCH_TOP_MUSIC_OVERALL_FAILURE:
    case types.FETCH_PLAYISTS_FAILURE:
    case types.FETCH_TRACKS_FAILURE:
    case types.FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
