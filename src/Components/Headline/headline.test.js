import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import {findByDataSet} from '../../Utils/index';
import checkPropTypes from 'check-prop-types';


const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('Checking our proptypes', () => {
        it('It should not throw a warning', () => {
            const expectedProps = {
                header : 'Test header',
                desc : 'Test Desc',
                tempArr : [{
                    fName : 'Test Bilal',
                    lName : 'Test Bhojani',
                    email : 'test@hotmail.com',
                    age : 20,
                    onlineStatus : true
                }]
            };
            const propsError = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);
            expect(propsError).toBeUndefined();
        });
    });
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = { 
                header : 'Test Header', 
                desc  : "Test Description"
            };
            wrapper = setUp(props);
        });
        it('Should render without error', () => {
            const component = findByDataSet(wrapper, "headlineComponent");
            expect(component.length).toBe(1);
        });
        it('Should render H1', ()=>{
            const component = findByDataSet(wrapper, 'header');
            expect(component.length).toBe(1);
        });
        it('Should render P desc', ()=>{
            const component = findByDataSet(wrapper, 'description');
            expect(component.length).toBe(1);
        })
    });
    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
        it('Should not render', () => {
            const component = findByDataSet(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });
    });
});
