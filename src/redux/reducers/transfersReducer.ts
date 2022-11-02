import {
  TRANSFERS_FILTER_ALL_STOPS_TOGGLE,
  TRANSFERS_FILTER_NON_STOPS_TOGGLE,
  TRANSFERS_FILTER_ONE_STOPS_TOGGLE,
  TRANSFERS_FILTER_TWO_STOPS_TOGGLE,
  TRANSFERS_FILTER_THREE_STOPS_TOGGLE,
} from '../actions/actionTypes';

interface IAction {
  type: string;
}

interface IState {
  isAllStopsChecked: boolean;
  isNonStopsChecked: boolean;
  isOneStopsChecked: boolean;
  isTwoStopsChecked: boolean;
  isThreeStopsChecked: boolean;
}

const initialState: IState = {
  isAllStopsChecked: true,
  isNonStopsChecked: true,
  isOneStopsChecked: true,
  isTwoStopsChecked: true,
  isThreeStopsChecked: true,
};

type TogglePropertyType =
  | 'isAllStopsChecked'
  | 'isNonStopsChecked'
  | 'isOneStopsChecked'
  | 'isTwoStopsChecked'
  | 'isThreeStopsChecked';

function transfersReducer(state = initialState, action: IAction): IState {
  const toggleProperty = (property: TogglePropertyType) => {
    const toggledPropertyState = { ...state, [property]: !state[property] };
    const isProtertyAllChecked = toggledPropertyState.isAllStopsChecked;

    if (property === 'isAllStopsChecked' && isProtertyAllChecked) {
      return {
        isAllStopsChecked: true,
        isNonStopsChecked: true,
        isOneStopsChecked: true,
        isTwoStopsChecked: true,
        isThreeStopsChecked: true,
      };
    }

    if (property === 'isAllStopsChecked' && !isProtertyAllChecked) {
      return {
        isAllStopsChecked: false,
        isNonStopsChecked: false,
        isOneStopsChecked: false,
        isTwoStopsChecked: false,
        isThreeStopsChecked: false,
      };
    }

    const { isAllStopsChecked, ...stateWithoutAllStops } = toggledPropertyState;
    let isAllProtertiesChecked = true;

    Object.values(stateWithoutAllStops).forEach((isChecked) => {
      if (!isChecked) isAllProtertiesChecked = false;
    });

    if (isAllProtertiesChecked) {
      return {
        ...toggledPropertyState,
        isAllStopsChecked: true,
      };
    }

    return {
      ...toggledPropertyState,
      isAllStopsChecked: false,
    };
  };

  switch (action.type) {
    case TRANSFERS_FILTER_ALL_STOPS_TOGGLE:
      return toggleProperty('isAllStopsChecked');

    case TRANSFERS_FILTER_NON_STOPS_TOGGLE:
      return toggleProperty('isNonStopsChecked');

    case TRANSFERS_FILTER_ONE_STOPS_TOGGLE:
      return toggleProperty('isOneStopsChecked');

    case TRANSFERS_FILTER_TWO_STOPS_TOGGLE:
      return toggleProperty('isTwoStopsChecked');

    case TRANSFERS_FILTER_THREE_STOPS_TOGGLE:
      return toggleProperty('isThreeStopsChecked');

    default:
      return state;
  }
}

export default transfersReducer;
