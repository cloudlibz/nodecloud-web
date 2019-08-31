import * as actions from "../src/_actions/alert.actions";
import * as constants from "../src/_constants/alert.constants";

describe("alert actions", () => {
  it("should create an action to alert success", () => {
    const message = "success message";
    const expectedAction = {
      type: constants.alertConstants.SUCCESS,
      message
    };
    expect(actions.alertActions.success(message)).toEqual(expectedAction);
  });

  it("should create an action to alert failure", () => {
    const message = "failure message";
    const expectedAction = {
      type: constants.alertConstants.ERROR,
      message
    };
    expect(actions.alertActions.error(message)).toEqual(expectedAction);
  });

  it("should create an action to alert clear", () => {
    const expectedAction = {
      type: constants.alertConstants.CLEAR
    };
    expect(actions.alertActions.clear()).toEqual(expectedAction);
  });
});
