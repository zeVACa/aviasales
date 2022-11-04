import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IRootState } from '../reducers/rootReducer';

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
