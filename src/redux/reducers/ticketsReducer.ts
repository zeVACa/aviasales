import { ITicket } from '../../types';
import { ALL_TICKETS_LOADED, FIRST_TICKETS_PACK_LOADED } from '../actions/actionTypes';

interface IState {
  data: ITicket[];
  isLoading: boolean;
}

export interface ITicketsAction {
  type: string;
  payload: ITicket[];
}

const initialState: IState = {
  data: [],
  isLoading: true,
};

function ticketsReducer(state: IState = initialState, action: ITicketsAction): IState {
  switch (action.type) {
    case FIRST_TICKETS_PACK_LOADED:
      return {
        ...state,
        data: action.payload,
      };

    case ALL_TICKETS_LOADED:
      return {
        data: [...state.data, ...action.payload],
        isLoading: false,
      };

    default:
      return state;
  }
}

export default ticketsReducer;
