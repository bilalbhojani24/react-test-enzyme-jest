import App from './App';
import {shallow} from 'enzyme';
import {findByDataSet, testStore} from './Utils/index';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive(); // to get the JSX of connected component state
    console.log(wrapper.debug());
    return wrapper;
}

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            post : [{title : 'Test App title 1', body : 'Test App desc 1'}, {title : 'Test App title 2', body : 'Test App desc 2'}, {title : 'Test App title 3', body : 'Test App desc 3'}]
        }
        wrapper = setUp(initialState);
    });
    it('Should render without errors', () => {
        const component = findByDataSet(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })
})