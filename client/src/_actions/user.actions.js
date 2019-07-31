import { userConstants } from "../_constants/user.constants.js";
import { userService } from "../_services/user.services.js";
import { alertActions } from "./alert.actions.js";
import { history } from "../_helpers/history.js";

export const userActions = {
  login,
  logout,
  register,
  getAll,
  createVirtualMachine,
  createVirtualNetwork,
  createDatabase,
  createSecurity,
  delete: _delete
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(user => {
      if (user.success) {
        dispatch(success(user));
        history.push("/home");
      } else {
        dispatch(failure(user.message));
        dispatch(alertActions.error(user.message));
      }
    });
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(user => {
      if (user.success) {
        dispatch(success(user));
        history.push("/home");
      } else {
        dispatch(failure(user.message));
        dispatch(alertActions.error(user.message));
      }
    });
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function getAll(serviceProvider) {
  return dispatch => {
    dispatch(request());

    userService.getAll(serviceProvider).then(res => {
      if (res.success) {
        dispatch(success(res.data));
        dispatch(alertActions.clear());
      } else {
        dispatch(failure(res.message));
        dispatch(alertActions.error(res.message));
      }
    });
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(services) {
    return { type: userConstants.GETALL_SUCCESS, services };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

function createVirtualMachine(params) {
  return dispatch => {
    dispatch(request(params));
    userService.createVirtualMachine(params).then(res => {
      if (res.success) {
        dispatch(success(res.data));
        dispatch(alertActions.success(res.message));
      } else {
        dispatch(failure(res.message));
        dispatch(alertActions.error(res.message));
      }
    });
  };

  function request(params) {
    return { type: userConstants.CREATE_VIRTUAL_MACHINE_REQUEST, params };
  }
  function success(response) {
    return { type: userConstants.CREATE_VIRTUAL_MACHINE_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.CREATE_VIRTUAL_MACHINE_FAILURE, error };
  }
}

function createVirtualNetwork(params) {
  return dispatch => {
    dispatch(request(params));
    userService.createVirtualNetwork(params).then(res => {
      if (res.success) {
        dispatch(success(res.data));
        dispatch(alertActions.success(res.message));
      } else {
        dispatch(failure(res.message));
        dispatch(alertActions.error(res.message));
      }
    });
  };

  function request(params) {
    return { type: userConstants.CREATE_VIRTUAL_NETWORK_REQUEST, params };
  }
  function success(response) {
    return { type: userConstants.CREATE_VIRTUAL_NETWORK_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.CREATE_VIRTUAL_NETWORK_FAILURE, error };
  }
}

function createDatabase(params) {
  return dispatch => {
    dispatch(request(params));
    userService.createDatabase(params).then(res => {
      if (res.success) {
        dispatch(success(res.data));
        dispatch(alertActions.success(res.message));
      } else {
        dispatch(failure(res.message));
        dispatch(alertActions.error(res.message));
      }
    });
  };

  function request(params) {
    return { type: userConstants.CREATE_DATABASE_REQUEST, params };
  }
  function success(response) {
    return { type: userConstants.CREATE_DATABASE_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.CREATE_DATABASE_FAILURE, error };
  }
}

function createSecurity(params) {
  return dispatch => {
    dispatch(request(params));
    userService.createSecurity(params).then(res => {
      if (res.success) {
        dispatch(success(res.data));
        dispatch(alertActions.success(res.message));
      } else {
        dispatch(failure(res.message));
        dispatch(alertActions.error(res.message));
      }
    });
  };

  function request(params) {
    return { type: userConstants.CREATE_SECURITY_REQUEST, params };
  }
  function success(response) {
    return { type: userConstants.CREATE_SECURITY_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.CREATE_SECURITY_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id).then(
      user => {
        dispatch(success(id));
        dispatch(alertActions.success(user.message));
      },
      error => {
        dispatch(failure(id, error));
      }
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}
