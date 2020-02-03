import * as reducer from '../src/_reducers/authentication.reducer';

describe('reducer', () => {
  describe('LOGIN REQUEST', () => {
    test('sets login to requesting', () => {
      const previousState = {
        otherProp: 'test-123',
      };
      const action = {
        type: 'USERS_LOGIN_REQUEST',
      };
      const nextState = reducer.authentication(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe('LOGIN SUCCESS', () => {
    test('sets login to success', () => {
      const previousState = {
        otherProp: 'test-123',
      };
      const action = {
        type: 'USERS_LOGIN_SUCCESS',
      };
      const nextState = reducer.authentication(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe('LOGIN FAILURE', () => {
    test('sets login to failure', () => {
      const previousState = {
        otherProp: 'test-123',
      };
      const action = {
        type: 'USERS_LOGIN_FAILURE',
      };
      const nextState = reducer.authentication(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });
});
