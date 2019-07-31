import { authHeader } from "../_helpers/auth-header.js";
import { Urls } from "../_helpers/urls.js";

export const userService = {
  login,
  logout,
  register,
  getAll,
  createVirtualMachine,
  createVirtualNetwork,
  createDatabase,
  createSecurity,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(Urls.BASE_URL + Urls.SUB_URL_LOGIN, requestOptions)
    .then(handleResponse)
    .then(res => {
      if (res.success) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("access_token", res.token);
      }
      return res;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  localStorage.removeItem("access_token");
}

function getAll(serviceProvider) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(
    Urls.BASE_URL + Urls.SUB_URL_HOME + "?serviceProvider=" + serviceProvider,
    requestOptions
  )
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(Urls.BASE_URL + Urls.SUB_URL_SIGNUP, requestOptions).then(
    handleResponse
  );
}

function createVirtualMachine(params) {
  params.token = authHeader().token;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  };

  return fetch(
    Urls.BASE_URL + params.provider + Urls.SUB_URL_CREATE_VIRTUAL_MACHINE,
    requestOptions
  ).then(handleResponse);
}

function createVirtualNetwork(params) {
  params.token = authHeader().token;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  };

  return fetch(
    Urls.BASE_URL + params.provider + Urls.SUB_URL_CREATE_VIRTUAL_NETWORK,
    requestOptions
  ).then(handleResponse);
}

function createDatabase(params) {
  params.token = authHeader().token;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  };

  return fetch(
    Urls.BASE_URL + params.provider + Urls.SUB_URL_CREATE_DATABASE,
    requestOptions
  ).then(handleResponse);
}

function createSecurity(params) {
  params.token = authHeader().token;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  };

  return fetch(
    Urls.BASE_URL + params.provider + Urls.SUB_URL_CREATE_SECURITY,
    requestOptions
  ).then(handleResponse);
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(
    Urls.BASE_URL + Urls.SUB_URL_DELETE + "?id=" + id,
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      getAll();
      return user;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    console.log(response);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }
      const error = (data && data.message) || response.message;
      return Promise.reject(error);
    }
    return data;
  });
}
