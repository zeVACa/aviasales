import { Dispatch } from 'redux';
import { ITicket } from '../../types';
import { ITicketsAction } from '../reducers/ticketsReducer';
import { TogglePropertyType } from '../reducers/transfersReducer';
import {
  SORT_PRICE,
  SORT_SPEED,
  ALL_TICKETS_LOADED,
  FIRST_TICKETS_PACK_LOADED,
  TRANSFERS_FILTER_PROPERTY_TOGGLE,
  SORT_OPTIMAL,
} from './actionTypes';

export const sortPrice = () => ({ type: SORT_PRICE });
export const sortSpeed = () => ({ type: SORT_SPEED });
export const sortOptimal = () => ({ type: SORT_OPTIMAL });

export const transfersFilterPropertyToggle = (property: TogglePropertyType) => ({
  type: TRANSFERS_FILTER_PROPERTY_TOGGLE,
  payload: property,
});

export const ticketsLoad = () => async (dispatch: Dispatch<ITicketsAction>) => {
  const allTickets: ITicket[] = [];

  const searchIdresponse = await fetch('https://front-test.dev.aviasales.ru/search');
  const { searchId } = await searchIdresponse.json();

  let isNotLastTicketsPack = true;
  let isFirstTicketsPackLoaded = false;
  while (isNotLastTicketsPack) {
    /* eslint-disable no-await-in-loop */

    const ticketsResponse = await fetch(
      `https://front-test.dev.aviasales.ru/tickets??searchId=${searchId}`,
    );

    /* eslint-disable no-continue */
    if (ticketsResponse.status !== 200) continue;
    const { tickets, stop } = await ticketsResponse.json();

    if (!isFirstTicketsPackLoaded) {
      isFirstTicketsPackLoaded = true;
      dispatch({ type: FIRST_TICKETS_PACK_LOADED, payload: tickets });
    }

    allTickets.push(...tickets);
    if (stop) isNotLastTicketsPack = false;
  }

  dispatch({ type: ALL_TICKETS_LOADED, payload: allTickets });
};
