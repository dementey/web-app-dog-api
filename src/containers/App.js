import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectSubreddit, initialFetchPosts, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import SimpleAppBar from '../components/SimpleAppBar';
import PagesRouter from '../components/PagesRouter'
import Footer from '../components/Footer'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {

    const { dispatch, selectedSubreddit } = this.props
    dispatch(initialFetchPosts())
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props
      //dispatch(initialFetchPosts())
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
    const { selectedSubreddit,  initialposts, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    console.log(initialposts);
    return (
      <BrowserRouter>
        <Fragment>
          <SimpleAppBar />
          <PagesRouter />
          <Picker value={selectedSubreddit}
            onChange={this.handleChange}
           // options={['affenpinscher', 'african']} />
           options={['affenpinscher', 'african']||initialposts} />
          <p>
            {lastUpdated &&
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
              </span>
            }
            {!isFetching &&
              <button onClick={this.handleRefreshClick}>
                Refresh
            </button>
            }
          </p>
          {isEmpty
            ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
            : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
          }

          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, initialPostsBySubreddit,  postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }
  const { items2: initialposts } = initialPostsBySubreddit

  return {
    selectedSubreddit,
    initialposts,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
