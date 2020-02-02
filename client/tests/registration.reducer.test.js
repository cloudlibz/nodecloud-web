import * as reducer from '../src/_reducers/registration.reducer';

describe('reducer', () => {
  describe('REGISTRATION REQUEST', () => {
    test('sets registration to requesting', () => {
      const previousState = {
        otherProp: 'test-123',
      };
      const action = {
        type: 'USERS_REGISTER_REQUEST',
      };
      const nextState = reducer.registration(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe('REGISTRATION SUCCESS', () => {
    test('sets registration to success', () => {
      const previousState = {
        otherProp: 'test-123',
      };
      const action = {
        type: 'USERS_REGISTER_SUCCESS',
      };
      const nextState = reducer.registration(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe('REGISTRATION FAILURE', () => {
    test('sets registration to failure', () => {
      const previousState = {
        otherProp: 'test-123',
      };
      const action = {
        type: 'USERS_REGISTER_FAILURE',
      };
      const nextState = reducer.registration(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });
});
