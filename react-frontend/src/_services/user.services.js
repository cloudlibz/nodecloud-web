import { authHeader } from "../_helpers/auth-header.js";
import { history } from "../_helpers/history.js";

export const userService = {
  login,
  logout,
  register,
  getAll,
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

  return fetch(`http://localhost:4000/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("access_token", user.token);
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  console.log("some how logout was called");
  localStorage.removeItem("user");
}

function getAll(serviceProvider) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(
    `http://localhost:4000/home/?serviceProvider=${serviceProvider}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => {
      console.log("AAAA", data);
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

  return fetch(`http://localhost:4000/signup`, requestOptions).then(
    handleResponse
  );
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

  return fetch(`/users/${id}`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("access_token", user.token);
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
