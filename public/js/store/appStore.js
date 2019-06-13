import { createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/appReducer';
import { ajaxHandler } from '../middleware/ajaxHandler';

export const store = createStore(reducers, applyMiddleware(ajaxHandler));