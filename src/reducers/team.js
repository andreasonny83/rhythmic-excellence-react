import { GET_TEAM } from "../actions/getTeam";
import { ACTIVATE_MEMBER } from "../actions/activateMember";
import { CLEAR_MEMBER } from "../actions/clearActiveMember";

const initialState = {
  loading: true,
  active: null,
  members: [],
};

export const team = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM:
      return {
        ...state,
        loading: false,
        members: action.payload,
      };
    case ACTIVATE_MEMBER:
      return {
        ...state,
        active: action.payload,
      };
    case CLEAR_MEMBER:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
