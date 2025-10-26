import { combineReducers } from 'redux';
import { feedReducer } from './feed';

const rootReducer = combineReducers({
  feed: feedReducer,
  // Add other reducers here as needed
  // auth: authReducer,
  // ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
