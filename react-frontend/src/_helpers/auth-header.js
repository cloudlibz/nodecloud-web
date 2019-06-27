export function authHeader() {
  // return authorization header with jwt token
  let token = localStorage.getItem("access_token");

  if (token) {
    return { token };
  } else {
    return {};
  }
}
