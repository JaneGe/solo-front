import Cookie from 'js-cookie'
import { TOKEN_KEY } from '../constants'

export function setToken (value) {
    Cookie.set(TOKEN_KEY, value)
}

export function getToken () {
    Cookie.get(TOKEN_KEY)
}

export function removeToken () {
    Cookie.remove(TOKEN_KEY)
}