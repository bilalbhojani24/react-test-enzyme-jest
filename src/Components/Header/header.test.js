import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByDataSet} from '../../Utils/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}

describe('Header Component', () => {

    let component;
    // This will run before each run and we are calling Header Component here to avoid code repetition
    beforeEach(() => {
        component = setUp();
    })
    it("Should render without error", () => {
        // const component = setUp();
        // console.log(component.debug()); // to check what is rendered
        const wrapper = findByDataSet(component, 'headerComponentTest');
        expect(wrapper.length).toBe(1);
    });

    it("Should logo rendered", () => {
        // const component = setUp();
        // console.log(component.debug()); // to check what is rendered
        const wrapper = findByDataSet(component, 'logoTest'); // custom function to avoid repetition
        expect(wrapper.length).toBe(1);
    });

    

})

/**
 *  ##### SYNTAX ####

 it("Test Name string", () => {
     const component = shallow(<Header />); // load component
     console.log(component.debug()); // to check what is rendered
     const wrapper = component.find('#wrapper'); // check with ID
     const wrapper = component.find('.wrapper'); // Check with ClassName
     const wrapper = component.find(`[data-set="dataSetName"]`); // Check with data-set
     expect(wrapper.length).toBe(1);
});
    
*/