/*
  Users Actions
 */
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

/*
  Users Action Creators
 */
export function authUser (uid) {
  return {
    type: AUTH_USER,
    uid,
  }
}

export function unauthUser () {
  return {
    type: UNAUTH_USER,
  }
}

export function fetchingUser () {
  return {
    type: FETCHING_USER,
  }
}

export function fetchingUserFailure (error) {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error Fetching User',
  }
}

export function fetchingUserSuccess (uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

/*
  User Reducer
 */
const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }

    default:
      return state
  }
}

/*
  Users Reducer
 */
const initialState = {
  error: '',
  authedId: '',
  isFetching: false,
  isAuthed: false,
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }

    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }

    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }

    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }

    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action),
        }

    default:
      return state
  }
}
