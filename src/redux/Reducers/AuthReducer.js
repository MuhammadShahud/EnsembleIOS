const initialState = {
  baseUrl: 'https://onboard-backendd.herokuapp.com/api/',
  login: {}
}

export const BASE_URL = state => state.AuthReducer.baseUrl
export const USER = state => state.AuthReducer.login

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        baseUrl: action.load
      }

    case 'Login':
      return {
        ...state,
        login: action.load
      }
  }

  return state
}
