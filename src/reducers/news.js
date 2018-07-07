import { GET_NEWS } from '../actions';

const initialState = {
  loading: true,
  items: []
};

export const news = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return action.payload;
    default:
      return state;
  }
};
