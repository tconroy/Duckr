import { postReply, fetchReplies } from 'helpers/api'

// Replies consts
export const FETCHING_REPLIES = 'FETCHING_REPLIES'
export const FETCHING_REPLIES_ERROR = 'FETCHING_REPLIES_ERROR'
export const FETCHING_REPLIES_SUCCESS = 'FETCHING_REPLIES_SUCCESS'
export const ADD_REPLY = 'ADD_REPLY'
export const ADD_REPLY_ERROR = 'ADD_REPLY_ERROR'
export const REMOVE_REPLY = 'REMOVE_REPLY'

// Replies Actions
export function fetchingReplies () {
  return {
    type: FETCHING_REPLIES,
  }
}

export function fetchingRepliesSuccess (duckId, replies) {
  return {
    type: FETCHING_REPLIES_SUCCESS,
    replies,
    duckId,
    lastUpdated: Date.now(),
  }
}

export function fetchingRepliesError (error) {
  console.warn(error)
  return {
    type: FETCHING_REPLIES_ERROR,
    error: 'Error Fetching Replies.',
  }
}

export function addAndHandleReply (duckId, reply) {
  return function (dispatch) {
    const { replyWithId, replyPromise } = postReply(duckId, reply)
    dispatch(addReply(duckId, replyWithId))
    replyPromise.catch((error) => {
      dispatch(removeReply(duckId, replyWithId.replyId))
      dispatch(addReplyError(error))
    })
  }
}

export function fetchAndHandleReplies (duckId) {
  return function (dispatch) {
    dispatch(fetchingReplies())
    fetchReplies(duckId)
      .then((replies) => dispatch(fetchingRepliesSuccess(duckId, replies, Date.now())))
      .catch((error) => dispatch(fetchingRepliesError(error)))
  }
}

export function addReply (duckId, reply) {
  return {
    type: ADD_REPLY,
    duckId,
    reply,
  }
}

export function addReplyError (error) {
  console.warn(error)
  return {
    type: ADD_REPLY_ERROR,
    error: 'Error Adding reply',
  }
}

export function removeReply (replyId) {
  return {
    type: REMOVE_REPLY,
    replyId,
  }
}

// Replies
const initialReply = {
  name: '',
  reply: '',
  uid: '',
  timestamp: 0,
  avatar: '',
  replyId: '',
}

function duckReplies (state = initialReply, action) {
  switch (action.type) {
    case ADD_REPLY :
      return {
        ...state,
        [action.reply.replyId]: action.reply,
      }
    case REMOVE_REPLY :
      return {
        ...state,
        [action.reply.replyId]: undefined,
      }
    default :
      return state
  }
}

const initialDuckState = {
  lastUpdated: Date.now(),
  replies: {},
}

function repliesAndLastUpated (state = initialDuckState, action) {
  switch (action.type) {
    case FETCHING_REPLIES_SUCCESS :
      return {
        ...state,
        lastUpdated: action.lastUpdated,
        replies: action.replies,
      }
    case ADD_REPLY :
    case REMOVE_REPLY :
      return {
        ...state,
        replies: duckReplies(state.replies, action),
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
}

export default function replies (state = initialState, action) {
  switch (action.type) {
    case FETCHING_REPLIES :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_REPLIES_ERROR :
    case ADD_REPLY_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ADD_REPLY :
    case FETCHING_REPLIES_SUCCESS :
    case REMOVE_REPLY :
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.duckId]: repliesAndLastUpated(state[action.duckId], action),
      }
    default :
      return state
  }
}
