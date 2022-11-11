import { TRANSFERS_FILTER_PROPERTY_TOGGLE } from '../actions/actionTypes';

export type TogglePropertyType =
  | 'isAllStopsChecked'
  | 'isNonStopsChecked'
  | 'isOneStopsChecked'
  | 'isTwoStopsChecked'
  | 'isThreeStopsChecked';

interface IAction {
  type: string;
  payload: TogglePropertyType;
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
    case TRANSFERS_FILTER_PROPERTY_TOGGLE:
      return toggleProperty(action.payload);

    default:
      return state;
  }
}

export default transfersReducer;
