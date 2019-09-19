import * as reducer from "../src/_reducers/alert.reducer";
import * as actions from "../src/_actions/alert.actions";

describe("reducer", () => {
  describe("ALERT SUCCESS", () => {
    test("sets alert to success", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = actions.alertActions.success;
      const nextState = reducer.alert(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("ALERT ERROR", () => {
    test("sets alert to error", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = actions.alertActions.error;
      const nextState = reducer.alert(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });

  describe("ALERT CLEAR", () => {
    test("sets alert to clear", function() {
      const previousState = {
        otherProp: "test-123"
      };
      const action = actions.alertActions.clear;
      const nextState = reducer.alert(previousState, action);
      expect(nextState).toMatchSnapshot();
    });
  });
});
