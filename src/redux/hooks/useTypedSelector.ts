import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IRootState } from '../reducers';

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
