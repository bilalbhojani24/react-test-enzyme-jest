import React from 'react';
import {shallow} from 'enzyme';
import { findByDataSet } from '../../Utils/index';
import List from './index';
import { checkPropTypes } from 'prop-types';

describe('List item component', () => {
    // to check prop type
    describe('checking proptypes', () => {
        it("Shout Not throw warning", () => {
            const expectedProps = {
                title : 'Title Text',
                desc : 'Description'
            };
            const propsError = checkPropTypes(List.propTypes, expectedProps, 'props', List.name);
            expect(propsError).toBeUndefined();
        })
    });
    // To check component check
    describe('List component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title : 'Text',
                desc : 'Description'
            }
            wrapper = shallow(<List {...props} />)
        });
        
        it("Should render the button component", () => {
            const button = findByDataSet(wrapper, 'listWrapper');
            expect(button.length).toBe(1);
        });
        it("Should render a title", () => {
            const button = findByDataSet(wrapper, 'titleTest');
            expect(button.length).toBe(1);
        });
        it("Should render the description", () => {
            const button = findByDataSet(wrapper, 'descriptionTest');
            expect(button.length).toBe(1);
        });
    })
    // To check not rendered
    describe('List component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc : 'Description'
            }
            wrapper = shallow(<List {...props} />)
        });
        it("Should not render if title is empty", () => {
            const button = findByDataSet(wrapper, 'listWrapper');
            expect(button.length).toBe(0);
        });
    })
})
