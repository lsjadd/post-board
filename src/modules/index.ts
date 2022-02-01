import { combineReducers } from 'redux';
import memos from './memos';
import memos_main from './memos_main';

const rootReducer = combineReducers({
  memos,
  memos_main,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
