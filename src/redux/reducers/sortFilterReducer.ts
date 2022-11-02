import { SORT_PRICE, SORT_SPEED } from '../actions/actionTypes';

type SortType = 'price' | 'speed';

interface IAction {
  type: string;
}

const initialState: SortType = 'price';

function sortFilterReducer(state: SortType = initialState, action: IAction): SortType {
  switch (action.type) {
    case SORT_PRICE:
      return 'price';

    case SORT_SPEED:
      return 'speed';

    default:
      return state;
  }
}

export default sortFilterReducer;
