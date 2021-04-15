import React from 'react';
import {shallow} from 'enzyme';
import { findByDataSet } from '../../Utils/index';
import Button from './index';
import { checkPropTypes } from 'prop-types';

describe('Button component', () => {
    // to check prop type
    describe('checking proptypes', () => {
        it("Shout Not throw warning", () => {
            const expectedProps = {
                buttonText : 'Example Button Text',
                emitEvent : () => {

                }
            };
            const propsError = checkPropTypes(Button.propTypes, expectedProps, 'props', Button.name);
            expect(propsError).toBeUndefined();
        })
    });
    // To check component check
    describe('Button Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttontext : 'Text',
                emitEvent : () => {},
            }
            wrapper = shallow(<Button />)
        });
        it("Should render the button component", () => {
            const button = findByDataSet(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    })
})
