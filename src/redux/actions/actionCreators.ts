import {
  SORT_PRICE,
  SORT_SPEED,
  TRANSFERS_FILTER_ALL_STOPS_TOGGLE,
  TRANSFERS_FILTER_NON_STOPS_TOGGLE,
  TRANSFERS_FILTER_ONE_STOPS_TOGGLE,
  TRANSFERS_FILTER_THREE_STOPS_TOGGLE,
  TRANSFERS_FILTER_TWO_STOPS_TOGGLE,
} from './actionTypes';

export const sortPrice = () => ({ type: SORT_PRICE });
export const sortSpeed = () => ({ type: SORT_SPEED });

export const transfersFilterAllStopsToggle = () => ({ type: TRANSFERS_FILTER_ALL_STOPS_TOGGLE });
export const transfersFilterNonStopsToggle = () => ({ type: TRANSFERS_FILTER_NON_STOPS_TOGGLE });
export const transfersFilterOneStopsToggle = () => ({ type: TRANSFERS_FILTER_ONE_STOPS_TOGGLE });
export const transfersFilterTwoStopsToggle = () => ({ type: TRANSFERS_FILTER_TWO_STOPS_TOGGLE });
export const transfersFilterThreeStopsToggle = () => ({
  type: TRANSFERS_FILTER_THREE_STOPS_TOGGLE,
});
