export const INITIAL_REQUEST_POSTS = 'INITIAL_REQUEST_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const INITIAL_RECEIVE_POSTS = 'INITIAL_RECEIVE_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INITIAL_RECEIVE_SUBBREED = 'INITIAL_RECEIVE_SUBBREED'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const initialRequestPosts = () => ({
  type: INITIAL_REQUEST_POSTS
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const initialReceivePosts = (json) => ({
  type: INITIAL_RECEIVE_POSTS,
  initialposts: Object.keys(json.message),

})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.message.map(child => child),
  receivedAt: Date.now()
})

export const initialReceiveSubbreed = (json) => ({
  type: INITIAL_RECEIVE_SUBBREED,
  subbreed: Object.keys(json.message),

})

export const initialFetchPosts = () => dispatch => {
  dispatch(initialRequestPosts())
  return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(response => response.json())
    .then(json => dispatch(initialReceivePosts(json)))
}

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://dog.ceo/api/breed/${subreddit}/images`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

export const initialFetchSubBreed = subreddit => dispatch => {
  return fetch(`https://dog.ceo/api/breed/${subreddit}/list`)
    .then(response => response.json())
    .then(json => dispatch(initialReceiveSubbreed(json)))
}


const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}







/*
let nextTodoId = 0
export const addTodo = (text, result) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  result
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_PRIORITY: 'SHOW_PRIORITY',
  SHOW_TIME: 'SHOW_TIME',
}*/
