import moxios from 'moxios';
import {testStore} from '../Utils/index';
import {fetchPost} from '../actions/index';

describe('Testing fetch post', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [{
            title : 'Test State',
            body : 'Test Body'
        },
        {
            title : 'Test State',
            body : 'Test Body'
        },
        {
            title : 'Test State',
            body : 'Test Body'
        },
    ]
    const store = testStore();
    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status : 200,
            response : expectedState,
        });
    });
    return store.dispatch(fetchPost())
    .then(() => {
        const newState = store.getState();
        expect(newState.post).toBe(expectedState); 
    })
    });

});