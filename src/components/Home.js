import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, initialFetchPosts, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Picker from '../components/Picker'
import ImageGridList from '../components/ImageGridList'

class Home extends Component {
    static propTypes = {
        selectedSubreddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(initialFetchPosts())
    }
    componentDidMount() {

        const { dispatch, selectedSubreddit } = this.props
        dispatch(initialFetchPosts())
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange = nextSubreddit => {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    handleRefreshClick = e => {
        e.preventDefault()

        const { dispatch, selectedSubreddit } = this.props
        dispatch(initialFetchPosts())
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const { selectedSubreddit, initial, posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0
        return (
            <Fragment>


                {initial && <Picker value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={initial} />
                }
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
                        <ImageGridList tileData={posts} />
                    </div>
                }


            </Fragment>

        )
    }
}

const mapStateToProps = state => {
    const { selectedSubreddit, initialPostsBySubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }
    const { items2: initial } = initialPostsBySubreddit || { items2: [] }
    return {
        selectedSubreddit,
        initial,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(Home)
