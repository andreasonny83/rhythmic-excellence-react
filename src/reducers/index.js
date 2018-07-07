import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';

import { news } from './news';
import { team } from './team';

export const rootReducer = combineReducers({
  burgerMenu,
  news,
  team,
});
