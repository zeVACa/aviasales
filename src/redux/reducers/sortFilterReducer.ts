import { SORT_OPTIMAL, SORT_PRICE, SORT_SPEED } from '../actions/actionTypes';

type SortType = 'price' | 'speed' | 'optimal';

interface IAction {
  type: string;
  payload: SortType;
}

const initialState: SortType = 'price';

function sortFilterReducer(state: SortType = initialState, action: IAction): SortType {
  switch (action.type) {
    case SORT_PRICE:
      return 'price';

    case SORT_SPEED:
      return 'speed';

    case SORT_OPTIMAL:
      return 'optimal';

    default:
      return state;
  }
}

export default sortFilterReducer;
