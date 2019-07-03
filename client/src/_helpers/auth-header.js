export function authHeader() {
  // return authorization header with jwt token
  const token = localStorage.getItem("access_token");

  if (token) {
    return { token };
  } else {
    return {};
  }
}
