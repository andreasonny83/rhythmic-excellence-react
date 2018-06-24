import { combineReducers } from 'redux';

import { newsReducer } from './news';
import { teamReducer } from './team';

export const rootReducer = combineReducers({
  news: newsReducer,
  team: teamReducer,
});
