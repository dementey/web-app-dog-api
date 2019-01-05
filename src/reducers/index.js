import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  INITIAL_REQUEST_POSTS, INITIAL_RECEIVE_POSTS,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'
//import todos from './todos'
//import visibilityFilter from './visibilityFilter'

const selectedSubreddit = (state = 'affenpinscher', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const initialposts = (state = {
  items2: []
}, action) => {
  switch (action.type) {
    case INITIAL_REQUEST_POSTS:
      return {
        ...state
      }
    case INITIAL_RECEIVE_POSTS:
      {//console.log (action.initialposts)
        return {
        ...state,
        items2: action.initialposts
      }}
    default:
      return state
  }
}


const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const initialPostsBySubreddit = (state = {}, action) => {
   switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case INITIAL_RECEIVE_POSTS:
    case INITIAL_REQUEST_POSTS:
      return {
        ...state,
        items2: initialposts(state[action.initialsubreddit], action)
      }
    default:
      return state
  }
}




const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  initialPostsBySubreddit,
  postsBySubreddit,
  selectedSubreddit,
  //todos,
 // visibilityFilter
})

export default rootReducer
