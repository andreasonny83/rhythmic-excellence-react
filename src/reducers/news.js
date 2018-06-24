import { GET_NEWS } from '../actions';

const initialState = {
  loading: true,
  items: []
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return action.payload;
    default:
      return state;
  }
};
