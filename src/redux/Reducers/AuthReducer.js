const initialState = {
  baseUrl: 'https://onboard-backendd.herokuapp.com/api/',
  login: {},
  goals:{}
}

export const BASE_URL = state => state.AuthReducer.baseUrl
export const USER = state => state.AuthReducer.login
export const GOALS = state => state.AuthReducer.goals


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

      case 'Goals':
        return {
          ...state,
          goals: action.load
        }
  }

  return state
}
