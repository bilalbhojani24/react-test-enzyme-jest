import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/index';
import {middlewares } from '../createStore';

export const testStore = (initialState) => {
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlewares(rootReducer, initialState)
}
export const findByDataSet = (component, attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;
}