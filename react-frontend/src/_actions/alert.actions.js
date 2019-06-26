//All alertActions, so it is easy to see all actions at a glance.
//dispatch(alertActions.success('Registration successful')) to call any of them
import { alertConstants } from "../_constants/alert.constants.js";

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
