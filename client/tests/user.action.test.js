import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library
import fetch from 'isomorphic-fetch';
import * as types from '../src/_constants/user.constants';
import * as actions from '../src/_actions/user.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN_SUCCESS when user login has been done', () => {
    // fetchMock.postOnce("/login/", {
    //   body: { username: "a", password: "b" },
    //   headers: { "content-type": "application/json" }
    // });

    const expectedActions = [
      { type: types.userConstants.LOGIN_REQUEST },
      {
        type: types.userConstants.LOGIN_SUCCESS,
        body: { users: { username: 'a', password: 'b' } },
      },
    ];
    const store = mockStore({ users: [] });

    return store.dispatch(actions.userActions.login('a', 'b')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
