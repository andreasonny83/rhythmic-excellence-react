import { GET_TEAM } from "../actions/getTeam";

const initialState = {
  loading: true,
  members: []
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM:
      return action.payload;
    default:
      return state;
  }
};
