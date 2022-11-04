import { combineReducers } from 'redux';
import sortFilterReducer from './sortFilterReducer';
import transfersReducer from './transfersReducer';
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
  sortBy: sortFilterReducer,
  transfersForm: transfersReducer,
  tickets: ticketsReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
