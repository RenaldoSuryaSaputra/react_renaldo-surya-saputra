import cookies from 'js-cookie'

const AUTH_COOKIES = "auth_login"

export function setAuthCookie(token) {
  cookies.set(AUTH_COOKIES, token, {
    expires: 14,
  })
}

export function getAuthCookie() {
  const token = cookies.get(AUTH_COOKIES)
  return token
}

export function removeAuthCookie() {
  cookies.remove(AUTH_COOKIES)
}
