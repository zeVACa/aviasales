import { combineReducers } from 'redux';
import sortFilterReducer from './sortFilterReducer';
import transfersReducer from './transfersReducer';

const rootReducer = combineReducers({ sortBy: sortFilterReducer, transfersForm: transfersReducer });

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
