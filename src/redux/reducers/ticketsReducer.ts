import { v4 as uuid } from 'uuid';
import { ITicket } from '../../types';
import { TICKETS_LOADED } from '../actions/actionTypes';

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
    case TICKETS_LOADED:
      return {
        data: action.payload.map((ticket) => ({
          ...ticket,
          id: uuid(),
        })),
        isLoading: false,
      };

    default:
      return state;
  }
}

export default ticketsReducer;
