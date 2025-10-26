import { combineReducers } from 'redux';
import { feedReducer } from './feed';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  feed: feedReducer,
  auth: authReducer,
  // Add other reducers here as needed
  // ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
